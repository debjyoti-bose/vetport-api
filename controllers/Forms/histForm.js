const { hist_form_services } = require("../../services");

// Create and Save a History form
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await hist_form_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get history form by species
exports.findBySpecies = async (req, res) => {
  try {
    const speciesId = req.params.id;
    const data = await hist_form_services.findBySpecies(speciesId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a history form by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await hist_form_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
