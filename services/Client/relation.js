const Relationship = require("../../models/Relationship");

// Create and Save a Relationship
exports.create = async (body) => {
  try {
    const doc = await Relationship.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Relationship
exports.findAll = async () => {
  try {
    const docs = await Relationship.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
