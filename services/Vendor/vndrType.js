const VendorType = require("../../models/VendorType");

// Create and Save a VendorType
exports.create = async (body) => {
  try {
    const doc = await VendorType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all VendorType from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await VendorType.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all VendorType from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await VendorType.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update VendorType by id
exports.update = async (id, body) => {
  try {
    const doc = await VendorType.findByIdAndUpdate(id, body, {
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
