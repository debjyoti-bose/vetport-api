const Manufacturer = require("../../models/Manufacturer");

// Create and Save a Manufacturer
exports.create = async (body) => {
  try {
    const doc = await Manufacturer.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
// Retrieve all Manufacturer from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Manufacturer.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve Manufacturer from the database by name with pagination.
exports.findByName = async (name, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await Manufacturer.find({
      title: { $regex: title, $options: "i" },
    })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Manufacturer from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Manufacturer.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve Manufacturer from the database by name without pagination.
// exports.findByName = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const doc = await Manufacturer.find({
//       title: { $regex: title, $options: "i" },
//     }).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Manufacturer by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Manufacturer.findByIdAndUpdate(id, body, {
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
