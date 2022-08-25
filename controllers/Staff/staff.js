const { staff_services } = require("../../services");

// Create and Save a Staff
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await staff_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staff from the database or by id.
exports.findAll = async (req, res) => {
  try {
    const data = await staff_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single Staff with an id
exports.findById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await staff_services.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter by provider
exports.filterProviderByName = async (req, res) => {
  try {
    const data = await staff_services.filterProviderByName();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // filter by clinic, status and isProvider
exports.filterByClinic = async (req, res) => {
  try {
    const body = req.params;
    const data = await staff_services.filterByClinic(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Staff by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await staff_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
