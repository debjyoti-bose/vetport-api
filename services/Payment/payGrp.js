const Paymentgroup = require("../../models/PaymentGroup");

// Create and Save a Payment group
exports.create = async (body) => {
  try {
    const doc = await Paymentgroup.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Payment group from the database.
exports.findAll = async () => {
  try {
    const docs = await Paymentgroup.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve payment group from the database by name.
exports.findByName = async (name) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await Paymentgroup.find({
      title: { $regex: title, $options: "i" },
    }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};
