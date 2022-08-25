const { search_cp_services } = require("../../services");

// Find all client/patient that match the query
exports.findByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...body } = req.query;
    const data = await search_cp_services.findByQuery(body, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
