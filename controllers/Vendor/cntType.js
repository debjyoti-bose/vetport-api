const { cnttype_services } = require("../../services");

// Create and Save a Content type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await cnttype_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Content type from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await cnttype_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve content type from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await cnttype_services.findByName(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Content type by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await cnttype_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
