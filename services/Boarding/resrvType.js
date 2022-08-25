const ReservationType = require("../../models/ReservationType");

// Create and Save a ReservationType
exports.create = async (body) => {
  try {
    const doc = await ReservationType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all ReservationType from the database.
exports.findAll = async () => {
  try {
    const docs = await ReservationType.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update ReservationType by id
exports.update = async (id, body) => {
  try {
    const doc = await ReservationType.findByIdAndUpdate(id, body, {
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
