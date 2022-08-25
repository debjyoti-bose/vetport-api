const TagInfo = require("../../models/TagInfo");

// Create and Save a TagInfo
exports.create = async (body) => {
  try {
    const doc = await TagInfo.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all TagInfo from the database.
exports.findAll = async () => {
  try {
    const docs = await TagInfo.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
