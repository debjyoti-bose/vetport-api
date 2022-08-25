const { app_type_services } = require("../../services");

// Create and Save a Appointmenttype
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await app_type_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Appointmenttype from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await app_type_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve Appointmenttype from the database by query parameter.
// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query;
//     const data = await appt_type_services.findByQuery(query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Retrieve AppointmentType from the database by name.
exports.filterByTitle = async (req, res) => {
  try {
    const name = req.query.title;
    const data = await app_type_services.filterByType(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Appointmenttype  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await app_type_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Appointmenttype  by the id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await app_type_services.delete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update default Appointmenttype from the database by id.
// exports.updateDefaultAppointmentType = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const defaultType = req.body;
//     const doc = await Appointmenttype.findByIdAndUpdate(id, defaultType, {
//       new: true,
//       runValidators: true,
//     }).lean();

//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
