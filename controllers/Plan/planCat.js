const { plncat_services } = require("../../services");

// Create and Save a Plancategory
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await plncat_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Plancategory
exports.findAll = async (req, res) => {
  try {
    const data = await plncat_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single plancategory with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await plncat_services.findOne(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Plan sub-category by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await plncat_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
