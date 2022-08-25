const Mclocation = require("../../models/McLocation");

// Create and Save a mobile clinic location
exports.create = async (body) => {
  try {
    const doc = await Mclocation.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all mobile clinic location from the database with paginaiton.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Mclocation.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all mobile clinic location from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Mclocation.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a mobile clinic location by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Mclocation.findByIdAndUpdate(id, body, {
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

// get location name and id
// exports.getByLocation = async (req, res) => {
//   try {
//     let docs = await Mclocation.find({}, { location_name: 1 });
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
