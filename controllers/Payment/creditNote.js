const { creditnote_services } = require("../../services");

// Create and Save a Credit note
exports.create = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await creditnote_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Credit note
exports.findAll = async (req, res) => {
  try {
    const data = await creditnote_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
