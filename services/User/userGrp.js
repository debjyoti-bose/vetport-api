const UserGroup = require("../../models/UserGroup");

// Create and Save a UserGroup
exports.create = async (body) => {
  try {
    const doc = await UserGroup.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all UserGroup from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await UserGroup.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all UserGroup from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await UserGroup.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update UserGroup by id
exports.update = async (id, body) => {
  try {
    const doc = await UserGroup.findByIdAndUpdate(id, body, {
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
