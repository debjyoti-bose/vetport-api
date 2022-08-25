const SubCategoryTax = require("../../models/SubCategoryTax");

// Create and Save a SubCategoryTax
exports.create = async (body) => {
  try {
    const doc = await SubCategoryTax.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all SubCategoryTax from the database.
exports.findAll = async () => {
  try {
    const docs = await SubCategoryTax.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update SubCategoryTax by id
exports.update = async (id, body) => {
  try {
    const doc = await SubCategoryTax.findByIdAndUpdate(id, body, {
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
