const { cat_tax_services } = require("../../services");

// Create and Save a new CategoryTax
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await cat_tax_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all CategoryTax from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await cat_tax_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all CategoryTax from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await ctgry_tax_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a CategoryTax by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await cat_tax_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
