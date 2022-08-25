const { pln_act_services } = require("../../services");

// Create and Save a Planaction
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await pln_act_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Planaction
exports.findAll = async (req, res) => {
  try {
    const data = await pln_act_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
