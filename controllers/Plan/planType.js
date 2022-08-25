const { plntype_services } = require("../../services");

// Create and Save a PlanType
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await plntype_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all PlanType from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await plntype_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
