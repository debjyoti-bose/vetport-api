const { phone_type_services } = require("../../services");

// Create and Save a new Phone type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await phone_type_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Phonetype from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await phone_type_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Phonetype from the database.
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await phone_type_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
