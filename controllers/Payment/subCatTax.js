const { subcat_tax_services } = require("../../services");

// Create and Save a SubCategoryTax
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await subcat_tax_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all SubCategoryTax from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await subcat_tax_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a SubCategoryTax by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await subcat_tax_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
