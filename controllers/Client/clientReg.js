const { client_reg_services } = require("../../services");

// Create and Save a new Client
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await client_reg_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// verify client email
exports.verifyClientEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await client_reg_services.verifyClientEmail(email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// verify client pnumber
exports.verifyClientPnumber = async (req, res) => {
  try {
    const pnumber = req.params.pnumber;
    const data = await client_reg_services.verifyClientPnumber(pnumber);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single Client with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await client_reg_services.findOne(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Client by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await client_reg_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
