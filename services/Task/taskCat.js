const TaskCategory = require("../../models/TaskCategory");

// Create and Save a TaskCategory
exports.create = async (body) => {
  try {
    const doc = await TaskCategory.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all TaskCategory from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await TaskCategory.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all TaskCategory from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await TaskCategory.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update TaskCategory by id
exports.update = async (id, body) => {
  try {
    const doc = await TaskCategory.findByIdAndUpdate(id, body, {
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
