const { staff_des_services } = require("../../services");

// Create and Save a Staffdesignation
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await staff_des_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staffdesignation from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await staff_des_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Create and Save a Staffdesignation without pagination
// exports.create = async (req, res) => {
//   try {
//     const body = req.body;
//     const data = await staff_designation_services.create(body);
//     res.status(201).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update an staffdesignation by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await staff_des_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
