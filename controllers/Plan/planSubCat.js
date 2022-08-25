const { pln_subcat_services } = require("../../services");

// Create and Save a Plan sub-category
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await pln_subcat_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Plan sub-category with pagination
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await pln_subcat_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Plan sub-category by plan category and status with pagination
exports.findByPlanCategory = async (req, res) => {
  try {
    const body = req.params;
    const { page = 1, limit = 10 } = req.query;
    const data = await pln_subcat_services.findByPlanCategory(
      body,
      limit,
      page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Retrieve all Plan sub-category without pagination
// exports.findAll = async (req, res) => {
//   try {
//     const data = await plan_sub_ctgry_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // Retrieve Plan sub-category by plan category and status without pagination
// exports.findByPlanCategory = async (req, res) => {
//   try {
//     const body = req.params;
//     const data = await plan_sub_ctgry_services.findByPlanCategory(body);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// Update Plan sub-category by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await pln_subcat_services.updaye(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
