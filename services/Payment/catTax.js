const CategoryTax = require("../../models/CategoryTax");

// Create and Save a new CategoryTax
exports.create = async (body) => {
  try {
    const doc = await CategoryTax.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all CategoryTax from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await CategoryTax.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all CategoryTax from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await CategoryTax.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a CategoryTax by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await CategoryTax.findByIdAndUpdate(id, body, {
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
