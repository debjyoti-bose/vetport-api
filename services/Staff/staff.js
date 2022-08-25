const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const Staff = require("../../models/Staff");
const User = require("../../models/User");

// Create and Save a Staff
exports.create = async (body) => {
  try {
    const { userId, userGroup, ...staff } = body;
    const staff_doc = await Staff.create(staff);

    // saving user credentials
    const staff_credentials_doc = await User.create({ userId, userGroup });
    if (staff_doc) {
      return staff_doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Staff from the database or by id.
exports.findAll = async () => {
  try {
    const docs = await Staff.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find a single Staff with an id
exports.findById = async (id) => {
  try {
    const doc = await Staff.findById(id).lean();
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// filter by provider
exports.filterProviderByName = async () => {
  try {
    const docs = await Staff.aggregate([
      {
        $match: {
          isProvider: true,
        },
      },
      {
        $project: {
          title: {
            $concat: ["$firstName", " ", "$lastName"],
          },
        },
      },
    ]);

    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // filter by clinic, status and isProvider
exports.filterByClinic = async (body) => {
  try {
    const query = {};

    query["clinic"] = objectId(body.clinic);
    query["status"] = body.status == "true";

    if (body["isProvider"] !== undefined) {
      query["isProvider"] = body.isProvider == "true";
    }

    const doc = await Staff.aggregate([
      { $match: query },
      {
        $project: {
          title: {
            $concat: ["$firstName", " ", "$lastName"],
          },
        },
      },
    ]);
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Staff by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Staff.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

//filter provider by name

// exports.filterProviderByName = async (req, res) => {
//   try {
//     docs = await Staff.aggregate([
//       {
//         $project: {
//           title: {
//             $concat: ["$firstName", " ", "$lastName"],
//           },
//         },
//       },
//     ]);

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// // filter provider by name

// exports.filterProviderByName = async (req, res) => {
//   try {
//     let docs = await Staff.find({}).select("firstName lastName -_id").lean();
//     console.log(docs);
//     res.json({ title: `${docs[0].firstName} ${docs[0].lastName}` });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// filter provide by referral clinic

// exports.filterReferralProvider = async (req, res) => {
//   try {
//     const clinicId = req.params.clinicId;
//     const doc = await Staff.aggregate([
//       { $match: { clinic: clinicId, isProvider: true } },
//       {
//         $project: {
//           title: {
//             $concat: ["$firstName", " ", "$lastName"],
//           },
//         },
//       },
//     ]);
//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
