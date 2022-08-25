const { equip_services } = require("../../services");

// Create a new Equipment
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await equip_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Find all Equipment with pagination
exports.find = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await equip_services.find(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Find all Equipment without pagination
// exports.find = async (req, res) => {
//   try {
//     const data = await equipment_services.find();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update an Equipment by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await equip_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
