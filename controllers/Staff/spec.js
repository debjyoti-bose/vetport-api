const { spec_services } = require("../../services");

// Create and Save specialization
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await spec_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all specialization from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await spec_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
