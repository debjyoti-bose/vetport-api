const Species = require("../../models/Species");

// Create and Save a Species
exports.create = async (body) => {
  try {
    const doc = await Species.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Species from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Species.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Species from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Species.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update Species by id
exports.update = async (id, body) => {
  try {
    const doc = await Species.findByIdAndUpdate(id, body, {
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
