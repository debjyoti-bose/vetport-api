const Followup = require("../../models/FollowUp");

// Create and Save a Followup
exports.create = async (body) => {
  try {
    const doc = await Followup.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Find all Followup
// exports.findAll = async () => {
//   try {
//     const docs = await Followup.find({}).lean();
//     console.log("plplpl");
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Followup by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Followup.findByIdAndUpdate(id, body, {
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

// Delete a Followup by the id in the request
exports.delete = async (id) => {
  try {
    await Followup.findByIdAndDelete(id);
    Promise.resolve("Followup Deleted");
  } catch (error) {
    return Promise.reject(error);
  }
};
