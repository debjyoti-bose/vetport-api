const { tag_info_services } = require("../../services");

// Create and Save a TagInfo
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await tag_info_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all TagInfo from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await tag_info_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
