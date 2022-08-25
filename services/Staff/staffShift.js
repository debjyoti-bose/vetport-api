const StaffShift = require("../../models/StaffShift");

// Create and Save a StaffShift
exports.create = async (body) => {
  try {
    const doc = await StaffShift.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all StaffShift from the database.
exports.findAll = async () => {
  try {
    const docs = await StaffShift.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update StaffShift by id
exports.update = async (id, body) => {
  try {
    const doc = await StaffShift.findByIdAndUpdate(id, body, {
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
