const { follow_up_services } = require("../../services");

// Create and Save a Followup
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await follow_up_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Find all Followup
// exports.findAll = async (req, res) => {
//   try {
//     const data = await follow_up_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Followup by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await follow_up_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Followup by the id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await follow_up_services.delete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
