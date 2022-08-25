const Breed = require("../../models/Breed");

// Create and Save a Breed
exports.create = async (body) => {
  try {
    const doc = await Breed.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Breed from the database with pagination.
exports.findAll = async (limit, page) => {
  try {
    const docs = await Breed.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find breed by species with pagination.
exports.getBreedBySpeciesId = async (speciesId, limit, page) => {
  try {
    const docs = await Breed.find({ species_id: speciesId }, { title: 1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Breed from the database without pagination.
// exports.findAll = async () => {
//   try {
//     const docs = await Breed.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Find breed by species without pagination
// exports.getBreedBySpeciesId = async (speciesId) => {
//   try {
//     const docs = await Breed.find(
//       { species_id: speciesId },
//       { title: 1 }
//     ).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Breed  by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Breed.findByIdAndUpdate(id, body, {
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

// exports.getBreedBySpeciesId = async (req, res) => {
//   try {
//     const id = req.query.id;
//     const docs = await Species.aggregate([
//       {
//         $match: { _id: ObjectId(id) },
//       },
//       {
//         $lookup: {
//           from: "breeds",
//           localField: "_id",
//           foreignField: "species_id",
//           as: "breed-info",
//         },
//       },
//       { $project: { "breed-info.breed": 1 } },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
