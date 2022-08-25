const AppointmentStatus = require("../../models/AppointmentStatus");

// Create a new AppointmentStatus
exports.create = async (body) => {
  try {
    const doc = await AppointmentStatus.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all AppointmentStatus from the database.
exports.findAll = async () => {
  try {
    const docs = await AppointmentStatus.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve AppointmentStatus from the database by name.
exports.filterByName = async (name) => {
  try {
    const nameFilter = name === undefined ? "" : name;
    const docs = await AppointmentStatus.find({
      status_name: { $regex: nameFilter, $options: "i" },
    }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a AppointmentStatus  by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await AppointmentStatus.findByIdAndUpdate(id, body, {
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

// Delete a AppointmentStatus by the id in the request
exports.delete = async (id) => {
  try {
    await AppointmentStatus.findByIdAndDelete(id);
    Promise.resolve("AppointmentStatus deleted successfully.");
  } catch (error) {
    return Promise.reject(error);
  }
};
