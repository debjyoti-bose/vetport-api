const ClientRegistration = require("../../models/ClientRegistration");
const PatientRegistration = require("../../models/PatientRegistration");
const clientEmitter = require("../../subscribers/ClientEmitter");

// Create and Save a new Client
exports.create = async (body) => {
  try {
    const doc = await ClientRegistration.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// verify client email
exports.verifyClientEmail = async (email) => {
  try {
    const doc = await ClientRegistration.find({
      email: email,
    });

    if (doc.length != 0) {
      return { isemail: true };
    } else {
      return { isemail: false };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// verify client pnumber
exports.verifyClientPnumber = async (pnumber) => {
  try {
    const doc = await ClientRegistration.find({
      "phoneNumber.pnumber": pnumber,
    });

    if (doc.length != 0) {
      return { ispnumber: true };
    } else {
      return { ispnumber: false };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find a single Client with an id
exports.findOne = async (id) => {
  try {
    const doc = await ClientRegistration.findById(id).lean();
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Client by the id in the request
exports.update = async (id, body) => {
  try {
    // let startTimer = new Date().getTime();

    const doc = await ClientRegistration.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return Promise.reject("Invalid Id");
    }

    clientEmitter.emit("updatePatientInfo", PatientRegistration, doc);

    // let endTimer = new Date().getTime();
    // let time = (endTimer - startTimer) / 1000;
    // console.log(time);
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Client from the database.
// Retrieve all Client from the database.

// exports.getPatient = async (req, res) => {
//   console.log(req.params);
//   try {
//     const { _id } = req.params;
//     //const docs = await Clientregistration.aggregate(pipeline)
//     let pipeline = [
//       {
//         $match: {
//           _id: ObjectId(_id),
//         },
//       },
//       {
//         $lookup: {
//           from: "patientregistrations",

//           as: "patient_info",
//           let: {
//             id: "$_id",
//           },
//           pipeline: [
//             {
//               $match: {
//                 $expr: {
//                   $eq: ["$client_Id", "$$id"],
//                 },
//               },
//             },
//           ],
//         },
//       },
//       {
//         $unwind: "$patient_info",
//         //preserveNullAndEmptyArrays : true
//       },
//       {
//         $project: {
//           firstname: 1,
//           lastname: 1,
//           patient_info: 1,
//           result: {
//             $and: [
//               { $gt: ["$patient_info.age", 4] },
//               { $lt: ["$patient_info.age", 7] },
//             ],
//           },
//         },
//       },
//     ];
//     const docs = await Clientregistration.aggregate(pipeline);
//     console.log(docs);
//     res.json(docs);
//   } catch (error) {
//     console.log(error);
//   }
// };
