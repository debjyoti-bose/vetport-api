const { task_cat_services } = require("../../services");

// Create and Save a TaskCategory
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await task_cat_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all TaskCategory from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { limit = 10, page = 1 } = req.query;
    const data = await task_cat_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all TaskCategory from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await task_category_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a TaskCategory by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await task_cat_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
