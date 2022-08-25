const PlanSubCategory = require("../../models/PlanSubCategory");

// Create and Save a Plan sub-category
exports.create = async (body) => {
  try {
    const doc = await PlanSubCategory.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Plan sub-category with pagination
exports.findAll = async (limit, page) => {
  try {
    const docs = await PlanSubCategory.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve Plan sub-category by plan category and status with pagination
exports.findByPlanCategory = async (body, limit, page) => {
  try {
    const query = {};
    query["plancategory_id"] = body.planCategoryId;
    if (body.status != undefined) {
      query["status"] = body.status === "true";
    }
    const docs = await PlanSubCategory.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Plan sub-category
// exports.findAll = async () => {
//   try {
//     const docs = await PlanSubCategory.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve Plan sub-category by plan category and status
// exports.findByPlanCategory = async (body) => {
//   try {
//     const query = {};
//     query["plancategory_id"] = body.planCategoryId;
//     if (body.status != undefined) {
//       query["status"] = body.status === "true";
//     }
//     const docs = await PlanSubCategory.find(query).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update Plan sub-category by query parameter
exports.update = async (id, body) => {
  try {
    const doc = await PlanSubCategory.findByIdAndUpdate(id, body, {
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
