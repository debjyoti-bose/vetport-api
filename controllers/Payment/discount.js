const { discount_services } = require("../../services");

// Create and Save a Discount
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await discount_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Discount from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await discount_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter discount by title with pagination
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const { page = 1, limit = 10 } = req.query;
    const data = await discount_services.findByName(name, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Discount from the database with pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await discount_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // filter discount by title without pagination.
// exports.findByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const data = await discount_services.findByName(name);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Discount by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await discount_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter discount by title

// exports.getDiscountByName = async (req, res) => {
//   try {
//     docs = await Discount.aggregate([
//       {
//         $project: {
//           title: "$title",
//         },
//       },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
