const { app_stat_services } = require("../../services");

// Create a new AppointmentStatus
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await app_stat_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all AppointmentStatus from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await app_stat_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve AppointmentStatus from the database by name.
exports.filterByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await app_stat_services.find(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a AppointmentStatus  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await app_stat_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a AppointmentStatus by the id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await app_stat_services.delete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
