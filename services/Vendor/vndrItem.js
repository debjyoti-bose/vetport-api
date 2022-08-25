const VendorItem = require("../../models/VendorItem");

// Create and Save a Vendor item
exports.create = async (body) => {
  try {
    const doc = await VendorItem.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Vendor item from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await VendorItem.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve vendor from the database by name with pagination.
exports.findByName = async (name, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await VendorItem.find({
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

// Retrieve Vendoritem from the database by query with pagination.
exports.filterByQuery = async (query, limit, page) => {
  try {
    const docs = await VendorItem.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Vendor item from the database.
// exports.findAll = async () => {
//   try {
//     const docs = await VendorItem.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve vendor from the database by name.
// exports.findByName = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const doc = await VendorItem.find({
//       title: { $regex: title, $options: "i" },
//     }).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve Vendoritem from the database by query
// exports.filterByQuery = async (query) => {
//   try {
//     const docs = await VendorItem.find(query).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Vendor item by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await VendorItem.findByIdAndUpdate(id, body, {
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
