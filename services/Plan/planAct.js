const Planaction = require("../../models/PlanAction");

// Create and Save a Planaction
exports.create = async (body) => {
  try {
    const doc = await Planaction.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Planaction
exports.findAll = async () => {
  try {
    const docs = await Planaction.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
