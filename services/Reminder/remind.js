const Reminder = require("../../models/Reminder");

//Create a new Reminder
exports.create = async (body) => {
  try {
    const doc = await Reminder.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

//Find all Reminders or find reminder by id with pagination
exports.findAll = async (limit, page) => {
  try {
    const docs = await Reminder.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find reminder by id
exports.findById = async (id) => {
  try {
    const doc = await Reminder.findById(id).lean();
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Filter Reminders by title without pagination
exports.findByTitle = async (name, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await Reminder.find({
      title: { $regex: title, $options: "i" },
    })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();

    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Find Reminders by planitem, reminder, status without pagination
exports.findByQuery = async (query, limit, page) => {
  try {
    const doc = await Reminder.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// //Find all Reminders without pagination
// exports.findAll = async () => {
//   try {
//     const docs = await Reminder.find({}).lean();
//     return docs;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// //Filter Reminders by title without pagination
// exports.findByTitle = async (name) => {
//   try {
//     const title = name === undefined ? "" : name;
//     const doc = await Reminder.find({
//       title: { $regex: title, $options: "i" },
//     }).lean();

//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// //Find Reminders by planitem, reminder, status without pagination
// exports.findByQuery = async (query) => {
//   try {
//     const doc = await Reminder.find(query).lean();
//     return doc;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

//Update the Reminder by id
exports.update = async (id, body) => {
  try {
    const doc = await Reminder.findByIdAndUpdate(id, body, {
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
