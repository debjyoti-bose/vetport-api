const { stock_bskt_services } = require("../../services");

// Create and Save a StockBasket
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await stock_bskt_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all StockBasket from the database with pagination.
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await stock_bskt_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve StockBasket the database by name with pagination.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const { page = 1, limit = 10 } = req.query;
    const data = await stock_bskt_services.findByName(name, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve StockBasket from the database by basket,vendorItem,planItem with pagination
exports.filterByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...query } = req.query;
    const data = await stock_bskt_services.filterByQuery(query, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all StockBasket from the database without pagination.
// exports.findAll = async (req, res) => {
//   try {
//     const data = await stock_basket_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve StockBasket the database by name without pagination.
// exports.findByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const data = await stock_basket_services.findByName(name);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve StockBasket from the database by basket,vendorItem,planItem without pagination
// exports.filterByQuery = async (req, res) => {
//   try {
//     const query = req.query;
//     const data = await stock_basket_services.filterByQuery(query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update a StockBasket by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await stock_bskt_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Map planitem to stock basket
exports.mapPlanItem = async (req, res) => {
  try {
    const id = req.params.id;
    const planItemId = req.params.planitem;
    const data = await stock_bskt_services.mapPlanItem(id, planItemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Map vendoritem to stock basket
exports.mapVendorItem = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorItemId = req.params.vendoritem;
    const data = await stock_bskt_services.mapVendorItem(id, vendorItemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Remove planitem from stock basket
exports.removePlanItem = async (req, res) => {
  try {
    const id = req.params.id;
    const planItemId = req.params.planitem;
    const data = await stock_bskt_services.removePlanItem(id, planItemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Remove vendoritem from stock basket
exports.removeVendorItem = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorItemId = req.params.vendoritem;
    const data = await stock_bskt_services.removeVendorItem(id, vendorItemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
