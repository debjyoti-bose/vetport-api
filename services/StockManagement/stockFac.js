const StockFacility = require("../../models/StockFacility");

// Create and Save a StockFacility
exports.create = async (body) => {
  try {
    const doc = await StockFacility.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all StockFacility from the database.
exports.findAll = async () => {
  try {
    const docs = await StockFacility.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update StockFacility by id
exports.update = async (id, body) => {
  try {
    const doc = await StockFacility.findByIdAndUpdate(id, body, {
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
