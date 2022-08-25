const Discount = require("../../models/Discount");

// Create and Save a Discount
exports.create = async (body) => {
  try {
    const doc = await Discount.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Discount from the database with pagination
exports.findAll = async (limit, page) => {
  try {
    const docs = await Discount.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// filter discount by title with pagination
exports.findByName = async (name, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const docs = await Discount.find({
      title: { $regex: title, $options: "i" },
    })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Discount from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Discount.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // filter discount by title without pagination.
// exports.findByName = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const docs = await Discount.find({
//       title: { $regex: title, $options: "i" },
//     }).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Discount by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Discount.findByIdAndUpdate(id, body, {
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

// filter discount by title

// exports.getDiscountByName = async (req, res) => {
//   try {
//     docs = await Discount.aggregate([
//       {
//         $project: {
//           title: "$title",
//         },
//       },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
