const { relation_services } = require("../../services");

// Create and Save a Relationship
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await relation_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Relationship
exports.findAll = async (req, res) => {
  try {
    const data = await relation_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
