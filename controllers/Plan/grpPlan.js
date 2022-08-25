const { grp_pln_services } = require("../../services");

// Create and Save a GroupPlanItem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await grp_pln_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all GroupPlanItems with pagination
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await grp_pln_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve GroupPlanItem by id
exports.findById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await grp_pln_services.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve GroupPlanitem from the database by plan iem and species with pagination
exports.filterByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...query } = req.query;
    const data = await grp_pln_services.filterByQuery(query, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all GroupPlanItems without pagination
// exports.findAll = async (req, res) => {
//   try {
//     const data = await grp_plan_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve GroupPlanitem from the database by plan iem and species without pagination
// exports.filterByQuery = async (req, res) => {
//   try {
//     const query = req.query;
//     const data = await grp_plan_services.filterByQuery(query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update GroupPlanitem by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await grp_pln_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve GroupPlanitem from the database by name.
// exports.filterByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const docs = await GroupPlanItem.find(
//       {
//         title: { $regex: name, $options: "i" },
//       },
//       { title: 1 }
//     ).lean();
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
