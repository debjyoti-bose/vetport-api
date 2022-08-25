const Title = require("../../models/Title");

// Create and Save a title
exports.create = async (body) => {
  try {
    const doc = await Title.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Title from the database.
exports.findAll = async () => {
  try {
    const docs = await Title.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
