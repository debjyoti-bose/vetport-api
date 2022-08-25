const AttachmentType = require("../../models/AttachmentType");

// Create and Save a AttachmentType
exports.create = async (body) => {
  try {
    const doc = await AttachmentType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all AttachmentType from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await AttachmentType.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all AttachmentType from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await AttachmentType.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update AttachmentType by id
exports.update = async (id, body) => {
  try {
    const doc = await AttachmentType.findByIdAndUpdate(id, body, {
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
