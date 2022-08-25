const CreditNote = require("../../models/CreditNote");

// Create and Save a Credit note
exports.create = async (body) => {
  try {
    const docs = await CreditNote.count({});
    console.log(docs);
    const doc = await CreditNote.create({
      ...body,
      creditnoteno: docs + 1,
    });
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Credit note from the database.
exports.findAll = async () => {
  try {
    const docs = await CreditNote.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};
