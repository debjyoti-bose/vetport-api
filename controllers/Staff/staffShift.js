const { staff_shift_services } = require("../../services");

// Create and Save a StaffShift
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await staff_shift_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all StaffShift from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await staff_shift_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a StaffShift by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await staff_shift_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
