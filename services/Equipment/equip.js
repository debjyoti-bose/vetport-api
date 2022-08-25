const Equipment = require("../../models/Equipment");

// Create a new Equipment
exports.create = async (body) => {
  try {
    const doc = await Equipment.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find all Equipment with pagination
exports.find = async (limit, page) => {
  try {
    const docs = await Equipment.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Find all Equipment without pagination
// exports.find = async () => {
//   try {
//     const docs = await Equipment.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update an Equipment by id
exports.update = async (id, body) => {
  try {
    const doc = await Equipment.findByIdAndUpdate(id, body, {
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
