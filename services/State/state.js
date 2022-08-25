const State = require("../../models/State");

// Create and Save a State
exports.create = async (body) => {
  try {
    const doc = await State.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all State from the database.
exports.findAll = async () => {
  try {
    const docs = await State.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve state by  CountryId
exports.findByCountry = async (countryId) => {
  try {
    const docs = await State.find({ country: countryId }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
