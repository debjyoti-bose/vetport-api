const { mc_loc_services } = require("../../services");

// Create and Save a mobile clinic location
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await mc_loc_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all mobile clinic location from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await mc_loc_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all mobile clinic location from the database wiithout pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await mc_location_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a mobile clinic location by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await mc_loc_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
