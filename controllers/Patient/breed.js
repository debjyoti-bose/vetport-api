const { breed_services } = require("../../services");

// Create and Save a Breed
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await breed_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Breed from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await breed_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find breed by species with pagination
exports.getBreedBySpeciesId = async (req, res) => {
  try {
    const id = req.params.id;
    const { page = 1, limit = 10 } = req.query;
    const data = await breed_services.getBreedBySpeciesId(id, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Breed from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await breed_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Find breed by species without pagination
// exports.getBreedBySpeciesId = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await breed_services.getBreedBySpeciesId(id);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Breed  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await breed_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
