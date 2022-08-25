const EquipmentCategory = require("../../models/EquipmentCategory");

// Create a new EquipmentCategory
exports.create = async (body) => {
  try {
    const doc = await EquipmentCategory.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find all EquipmentCategories with pagination
exports.find = async (limit, page) => {
  try {
    const docs = await EquipmentCategory.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Find all EquipmentCategories without pagination
// exports.find = async () => {
//   try {
//     const docs = await EquipmentCategory.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update an EquipmentCategory by id
exports.update = async (id, body) => {
  try {
    const doc = await EquipmentCategory.findByIdAndUpdate(id, body, {
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
