const GroupPlanItem = require("../../models/GroupPlanitem");

// Create and Save a GroupPlanItem
exports.create = async (body) => {
  try {
    const doc = await GroupPlanItem.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all GroupPlanItems with pagination
exports.findAll = async (limit, page) => {
  try {
    const docs = await GroupPlanItem.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve GroupPlanItem by id
exports.findById = async (id) => {
  try {
    const doc = await GroupPlanItem.findById(id)
      .populate({
        path: "groupPlanItem",
        select: "planItem",
        populate: {
          path: "planItem",
          populate: { path: "planItemId", select: "title" },
        },
      })
      .populate({
        path: "planItem",
        populate: { path: "planItemId", select: "title" },
      })
      .lean();

    if (!doc) {
      return Promise.reject("Invalid id");
    }

    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve GroupPlanitem from the database by plan iem and species
exports.filterByQuery = async (query, limit, page) => {
  try {
    const docs = await GroupPlanItem.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all GroupPlanItems without pagination
// exports.findAll = async () => {
//   try {
//     const docs = await GroupPlanItem.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve GroupPlanitem from the database by plan iem and species without pagination
// exports.filterByQuery = async (query) => {
//   try {
//     const docs = await GroupPlanItem.find(query).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update GroupPlanitem by id
exports.update = async (id, body) => {
  try {
    const doc = await GroupPlanItem.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();

    if (!doc) {
      return Promise.reject("Invalid id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve GroupPlanitem from the database by name.
// exports.filterByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const docs = await GroupPlanItem.find(
//       {
//         title: { $regex: name, $options: "i" },
//       },
//       { title: 1 }
//     ).lean();
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
