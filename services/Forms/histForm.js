const HistoryForm = require("../../models/HistoryForm");

// Create and Save a History form
exports.create = async (body) => {
  try {
    const doc = await HistoryForm.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// get history form by species
exports.findBySpecies = async (speciesId) => {
  try {
    const docs = await HistoryForm.find({ speciesId: speciesId }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a history form by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await HistoryForm.findByIdAndUpdate(id, body, {
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
