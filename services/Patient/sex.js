const Sex = require("../../models/Sex");

// Create and add a Sex of species
exports.create = async (body) => {
  try {
    const doc = await Sex.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Sex from the database of species with pagination
exports.findAll = async (limit, page) => {
  try {
    const docs = await Sex.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve sex by species Id with pagination
exports.getSexBySpecies = async (speciesId, limit, page) => {
  try {
    const docs = await Sex.find({ species_id: speciesId }, { title: 1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Retrieve all Sex from the database of species without pagination
// exports.findAll = async () => {
//   try {
//     const docs = await Sex.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// // Retrieve sex by species Id withou pagination
// exports.getSexBySpecies = async (speciesId) => {
//   try {
//     const docs = await Sex.find({ species_id: speciesId }, { title: 1 }).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// Update a Sex by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Sex.findByIdAndUpdate(id, body, {
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

// exports.getBySpecies = async (req, res) => {
//   try {
//     const id = req.query.id;
//     console.log(id);
//     const docs = await Species.aggregate([
//       {
//         $match: { _id: ObjectId(id) },
//       },
//       {
//         $lookup: {
//           from: "sexes",
//           localField: "_id",
//           foreignField: "species",
//           as: "sex-info",
//         },
//       },
//       { $project: { "sex-info.sex": 1 } },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
