const { pat_reg_services } = require("../../services");

// Create and Save a new Patient
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await pat_reg_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find all Patients
exports.findAll = async (req, res) => {
  try {
    const data = await pat_reg_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find Patient by Id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await pat_reg_services.findOne(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find  Patient Name according to client Id
exports.verifyPatientName = async (req, res) => {
  try {
    const query = req.params;
    const data = await pat_reg_services.verifyPatientName(query);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Patient by the id in the request
exports.update = async (req, res) => {
  try {
    // let startTimer = new Date().getTime();

    const id = req.params.id;
    const body = req.body;
    const data = await pat_reg_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
