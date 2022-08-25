const Plancategory = require("../../models/PlanCategory");

// Create and Save a Plancategory
exports.create = async (body) => {
  try {
    const doc = await Plancategory.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Plancategory
exports.findAll = async () => {
  try {
    const docs = await Plancategory.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find a single plancategory with an id
exports.findOne = async (id) => {
  try {
    const doc = await Plancategory.findById(id).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update Plan sub-category by query parameter
exports.update = async (id, body) => {
  try {
    const doc = await Plancategory.findByIdAndUpdate(id, body, {
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
