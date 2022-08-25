const AppointmentType = require("../../models/AppointmentType");

// Create and Save a AppointmentType
exports.create = async (body) => {
  try {
    const doc = await AppointmentType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all AppointmentType from the database.
exports.findAll = async () => {
  try {
    const docs = await AppointmentType.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve AppointmentType from the database by name.
exports.filterByType = async (name) => {
  try {
    const title = name === undefined ? "" : name;
    const docs = await AppointmentType.find({
      appointment_type: { $regex: title, $options: "i" },
    }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a AppointmentType  by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await AppointmentType.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Delete a AppointmentType  by the id in the request
exports.delete = async (id) => {
  try {
    await AppointmentType.delete(id);
    Promise.resolve("AppointmentType deleted successfully");
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve AppointmentType from the database by query parameter.
// exports.findByQuery = async (query) => {
//   try {
//     const docs = await AppointmentType.find(query).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update default AppointmentType from the database by id.
// exports.updateDefaultAppointmentType = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const defaultType = req.body;
//     const doc = await AppointmentType.findByIdAndUpdate(id, defaultType, {
//       new: true,
//       runValidators: true,
//     }).lean();

//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
