const { paytype_services } = require("../../services");

// Create and Save a Payment type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await paytype_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Payment type from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await paytype_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Payment type by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await paytype_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve payment type from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await paytype_services.findByName(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Update default Paymenttype from the database by id.
// exports.updateDefaultPaymentType = async (req, res) => {
//   try {
//     const id = req.query.id;
//     const body = req.body;
//     let doc = await Paymenttype.findByIdAndUpdate(id, defaultType).lean();
//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
