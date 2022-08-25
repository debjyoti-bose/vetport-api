const { cnt_services } = require("../../services");

// Create and Save a Country
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await cnt_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Countries
exports.findAll = async (req, res) => {
  try {
    const data = await cnt_services.findAll({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
