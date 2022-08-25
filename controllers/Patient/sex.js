const { sex_services } = require("../../services");

// Create and add a Sex of species
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await sex_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Sex from the database of species with pagination
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await sex_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve sex by species Id with pagination
exports.getSexBySpecies = async (req, res) => {
  try {
    const speciesId = req.params.id;
    const { page = 1, limit = 10 } = req.query;
    const data = await sex_services.getSexBySpecies(speciesId, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Sex from the database of  without pagination
// exports.findAll = async (req, res) => {
//   try {
//     const data = await sex_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve sex by species Id without pagination
// exports.getSexBySpecies = async (req, res) => {
//   try {
//     const speciesId = req.params.id;
//     const data = await sex_services.getSexBySpecies(speciesId);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Sex by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await sex_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
