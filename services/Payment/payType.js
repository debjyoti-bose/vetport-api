const Paymenttype = require("../../models/PaymentType");

// Create and Save a Payment type
exports.create = async (body) => {
  try {
    const doc = await Paymenttype.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Payment type from the database.
exports.findAll = async () => {
  try {
    const docs = await Paymenttype.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Payment type by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Paymenttype.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve payment type from the database by name.
exports.findByName = async (name) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await Paymenttype.find({
      title: { $regex: title, $options: "i" },
    }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
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
