const { pkgtype_services } = require("../../services");

// Create and Save a Package type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await pkgtype_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Package type from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await pkgtype_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve package type from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await pkgtype_services.findByName(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Package type by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await pkgtype_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
