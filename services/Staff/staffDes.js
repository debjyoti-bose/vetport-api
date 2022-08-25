const StaffDesignation = require("../../models/StaffDesignation");

// Create and Save a StaffDesignation
exports.create = async (body) => {
  try {
    const doc = await StaffDesignation.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all StaffDesignation from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await StaffDesignation.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all StaffDesignation from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await StaffDesignation.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update an staffdesignation by id
exports.update = async (id, body) => {
  try {
    const doc = await StaffDesignation.findByIdAndUpdate(id, body, {
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
