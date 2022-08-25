const ExamForm = require("../../models/ExamForm");

// Create a new ExamForm
exports.create = async (body) => {
  try {
    const doc = await ExamForm.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Filter exam forms by species
exports.findBySpecies = async (speciesId) => {
  try {
    const doc = await ExamForm.find({ species: speciesId }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update exam form
exports.update = async (id, body) => {
  try {
    const doc = await ExamForm.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};
