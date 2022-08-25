const ContentType = require("../../models/ContentType");

// Create and Save a Content type
exports.create = async (body) => {
  try {
    const doc = await ContentType.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Content type from the database.
exports.findAll = async () => {
  try {
    const docs = await ContentType.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve content type from the database by name.
exports.findByName = async (name) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await ContentType.find({
      title: { $regex: title, $options: "i" },
    }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Content type by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await ContentType.findByIdAndUpdate(id, body, {
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
