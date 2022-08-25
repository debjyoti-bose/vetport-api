const { enct_services } = require("../../services");

// Create and Save a Encounter
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await enct_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Encounter from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await enct_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Encounter  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await enct_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Encounter by the id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await enct_services.delete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
