const VisitReason = require("../../models/VisitReason");

// Create and Save a VisitReason
exports.create = async (body) => {
  try {
    const doc = await VisitReason.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all VisitReason from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await VisitReason.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all VisitReason from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await VisitReason.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update VisitReason by id
exports.update = async (id, body) => {
  try {
    const doc = await VisitReason.findByIdAndUpdate(id, body, {
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
