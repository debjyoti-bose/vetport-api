const Phonetype = require("../../models/PhoneType");

// Create and Save a new Phone type
exports.create = async (body) => {
  try {
    const doc = await Phonetype.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Phonetype from the database.
exports.findAll = async () => {
  try {
    const docs = await Phonetype.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Phonetype from the database.
exports.update = async (id, body) => {
  try {
    const doc = await Phonetype.findByIdAndUpdate(id, body, {
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
