const Encounter = require("../../models/Encounter");

// Create and Save a Encounter
exports.create = async (body) => {
  try {
    const doc = await Encounter.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Encounter from the database.
exports.findAll = async () => {
  try {
    const docs = await Encounter.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Encounter  by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Encounter.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Delete a Encounter by the id in the request
exports.delete = async (id) => {
  try {
    await Encounter.findByIdAndDelete(id);
    Promise.resolve("Encounter Deleted");
  } catch (error) {
    return Promise.reject(error);
  }
};
