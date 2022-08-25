const { vndritem_services } = require("../../services");

// Create and Save a Vendor item
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await vndritem_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Vendor item from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await vndritem_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve vendor from the database by name with pagination.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const { page = 1, limit = 10 } = req.query;
    const data = await vndritem_services.findByName(name, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Vendoritem from the database by VendorItem,Vendor,Manufacturer with pagination
exports.filterByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...query } = req.query;
    const data = await vndritem_services.filterByQuery(query, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Vendor item from the database.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await vendor_item_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve vendor from the database by name.
// exports.findByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const data = await vendor_item_services.findByName(name);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve Vendoritem from the database by VendorItem,Vendor,Manufacturer
// exports.filterByQuery = async (req, res) => {
//   try {
//     const query = req.query;
//     const data = await vendor_item_services.filterByQuery(query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a Vendor item by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await vndritem_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
