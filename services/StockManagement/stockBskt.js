const stockBasket = require("../../models/StockBasket");

// Create and Save a stockBasket
exports.create = async (body) => {
  try {
    const doc = await stockBasket.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all stockBasket from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await stockBasket
      .find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve stockBasket from the database by name with pagination.
exports.findByName = async (name, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await stockBasket
      .find({
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

// Retrieve stockBasket from the database by basket name, vendor and vendoritem with pagination
exports.filterByQuery = async (query, limit, page) => {
  try {
    const docs = await stockBasket
      .find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all stockBasket from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await stockBasket.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve stockBasket from the database by name without pagination.
// exports.findByName = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const doc = await stockBasket
//       .find({
//         title: { $regex: title, $options: "i" },
//       })
//       .lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve stockBasket from the database by basket name, vendor and vendoritem without pagination
// exports.filterByQuery = async (query) => {
//   try {
//     const docs = await stockBasket.find(query).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a stockBasket by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(id, body, {
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

// Map planitem to stock basket
exports.mapPlanItem = async (id, planItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $push: { planItem: planItemId } },
      { new: true, runValidators: true }
    );
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Map vendoritem to stock basket
exports.mapVendorItem = async (id, vendorItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $push: { vendorItem: vendorItemId } },
      { new: true, runValidators: true }
    );
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Remove planitem to stock basket
exports.removePlanItem = async (id, planItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $pull: { planItem: planItemId } },
      { new: true, runValidators: true }
    );
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Remove vendoritem to stock basket
exports.removeVendorItem = async (id, vendorItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $pull: { vendorItem: vendorItemId } },
      { new: true, runValidators: true }
    );
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Remove planitem to stock basket
exports.removePlanItem = async (id, planItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $pull: { planItem: planItemId } },
      { new: true, runValidators: true }
    );
    if (doc.length === 0) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Remove vendoritem to stock basket
exports.removeVendorItem = async (id, vendorItemId) => {
  try {
    const doc = await stockBasket.findByIdAndUpdate(
      id,
      { $pull: { vendorItem: vendorItemId } },
      { new: true, runValidators: true }
    );
    if (doc.length === 0) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};
