const Planitem = require("../../models/PlanItem");

// Create and Save a Planitem
exports.create = async (body) => {
  try {
    const doc = await Planitem.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Planitem
exports.findAll = async () => {
  try {
    const docs = await Planitem.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Find a single planitem with an id
// exports.findOne = async (id) => {
//   try {
//     const doc = await Planitem.findById(id).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve planitem from the database by name.
// exports.findByName = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const doc = await Planitem.find({
//       title: { $regex: title, $options: "i" },
//     }).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Filter planitems by plan category, plan sub-category and species
// exports.findByQuery = async (body) => {
//   try {
//     const query = {};
//     for (let key in body) {
//       if (body[key] !== undefined) {
//         query[key] = body[key];
//       }
//     }
//     const doc = await Planitem.find(query).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Find planitems with planaction
// exports.findByPlanaction = (query) => {
//   Planitem.find({})
//     .populate({
//       path: "planCategory_id planSubCategory_id",
//       select: "planaction_id",
//     })
//     .exec((error, result) => {
//       if (error) {
//         return return Promise.reject(error);
//       }

//       const doc = result.filter(
//         (item) =>
//           item.planCategory_id.planaction_id == query ||
//           item.planSubCategory_id.planaction_id == query
//       );

//       return doc;
//     });
// };

// Update Planitem
exports.update = async (id, body) => {
  try {
    const doc = await Planitem.findByIdAndUpdate(id, body, {
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
