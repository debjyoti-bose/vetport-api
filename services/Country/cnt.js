const Country = require("../../models/Country");

// Create and Save a Country
exports.create = async (body) => {
  try {
    const doc = await Country.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Countries
exports.findAll = async () => {
  try {
    const docs = await Country.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
