const { time_zone_services } = require("../../services");

// Create and Save a Title
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await time_zone_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all title from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await time_zone_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
