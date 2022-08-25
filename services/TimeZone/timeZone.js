const TimeZone = require("../../models/TimeZone");

// Create and Save a TimeZone
exports.create = async (body) => {
  try {
    const doc = await TimeZone.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all TimeZone from the database.
exports.findAll = async () => {
  try {
    const docs = await TimeZone.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
