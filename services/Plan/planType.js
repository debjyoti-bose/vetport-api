const PlanType = require("../../models/PlanType");

// Create and Save a PlanType
exports.create = async (body) => {
  try {
    const doc = await PlanType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all PlanType from the database.
exports.findAll = async () => {
  try {
    const docs = await PlanType.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
