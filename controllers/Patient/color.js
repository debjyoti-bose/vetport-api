const { color_services } = require("../../services");

// Create and Save a color of species
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await color_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all color of species from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await color_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve color by species with pagination.
exports.getColorBySpeciesId = async (req, res) => {
  try {
    const speciesId = req.params.id;
    const { page = 1, limit = 10 } = req.query;
    const data = await color_services.getColorBySpeciesId(
      speciesId,
      limit,
      page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all color of species from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await color_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve color by species without pagination
// exports.getColorBySpeciesId = async (req, res) => {
//   try {
//     const speciesId = req.params.id;
//     const data = await color_services.getColorBySpeciesId(speciesId);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Map color to species
exports.mapColor = async (req, res) => {
  try {
    const id = req.params.id;
    const speciesId = req.body.species_id;
    const data = await color_services.mapColor(id, speciesId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a color of species by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await color_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete color
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await color_services.delete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
