const Packagetype = require("../../models/PackageType");

// Create and Save a Package type
exports.create = async (body) => {
  try {
    const doc = await Packagetype.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Package type from the database.
exports.findAll = async () => {
  try {
    const docs = await Packagetype.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve package type from the database by name.
exports.findByName = async (name) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await Packagetype.find({
      title: { $regex: title, $options: "i" },
    }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Package type by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await Packagetype.findByIdAndUpdate(id, body, {
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
