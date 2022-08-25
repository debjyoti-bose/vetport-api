const Color = require("../../models/Color");

// Create and Save a color of species
exports.create = async (body) => {
  try {
    const doc = await Color.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all color of species from the database.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Color.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve color by species with pagination
exports.getColorBySpeciesId = async (speciesId, limit, page) => {
  try {
    const docs = await Color.find({ species_id: speciesId }, { title: 1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all color of species from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Color.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve color by species without pagination
// exports.getColorBySpeciesId = async (speciesId) => {
//   try {
//     const docs = await Color.find(
//       { species_id: speciesId },
//       { title: 1 }
//     ).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Map color to species
exports.mapColor = async (id, speciesId) => {
  try {
    const doc = await Color.findByIdAndUpdate(id, {
      $push: { species_id: speciesId },
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a color of species by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Color.findByIdAndUpdate(id, body, {
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

// Delete color
exports.delete = async (id) => {
  try {
    await Color.findByIdAndDelete(id);
    Promise.resolve("Color Deleted");
  } catch (error) {
    return Promise.reject(error);
  }
};

// exports.getColorBySpeciesId = async (req, res) => {
//   try {
//     const id = req.query.id;
//     console.log(id);
//     const docs = await Species.aggregate([
//       {
//         $match: { _id: ObjectId(id) },
//       },
//       {
//         $lookup: {
//           from: "colors",
//           localField: "_id",
//           foreignField: "species_id",
//           as: "color-info",
//         },
//       },
//       { $project: { "color-info.color": 1 } },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

//  Retrieve color by species Id
