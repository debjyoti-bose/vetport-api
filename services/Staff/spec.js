const Specialization = require("../../models/Specialization");

// Create and Save a Specialization
exports.create = async (body) => {
  try {
    const doc = await Specialization.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Specialization from the database.
exports.findAll = async () => {
  try {
    const docs = await Specialization.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
