const { vndr_services } = require("../../services");

// Create and Save a Vendor
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await vndr_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Vendor from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await vndr_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve vendor the database by name with pagination.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const { page = 1, limit = 10 } = req.query;
    const data = await vndr_services.findByName(name, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Vendor from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await vendor_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve vendor the database by name without pagination.
// exports.findByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const data = await vendor_services.findByName(name);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Vendor by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await vndr_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
