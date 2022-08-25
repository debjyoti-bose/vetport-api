const { exam_form_services } = require("../../services");

// Create a new ExamForm
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await exam_form_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Filter exam forms by species
exports.findBySpecies = async (req, res) => {
  try {
    const speciesId = req.params.species;
    const data = await exam_form_services.findBySpecies(speciesId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update exam form
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await exam_form_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
