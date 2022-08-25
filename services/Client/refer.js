const Reference = require("../../models/Reference");

// Create and Save a Reference
exports.create = async (body) => {
  try {
    const doc = await Reference.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Reference from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Reference.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Reference from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Reference.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update Reference by id
exports.update = async (id, body) => {
  try {
    const doc = await Reference.findByIdAndUpdate(id, body, {
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
