const { state_services } = require("../../services");

// Create and Save a State
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await state_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all State from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await state_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve state by countryId
exports.findByCountry = async (req, res) => {
  try {
    const countryId = req.params.id;
    const data = await state_services.findByCountry(countryId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
