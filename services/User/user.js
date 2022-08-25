const User = require("../../models/User");

//Create a new User
exports.create = async (body) => {
  try {
    const doc = await User.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all User from the database.
exports.findAll = async () => {
  try {
    const docs = await User.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Verify if user id exists or not
exports.getUserId = async (userId) => {
  try {
    const doc = await User.find({ userId: userId }).lean();

    if (doc.length != 0) {
      return { isuserId: true };
    } else {
      return { isuserId: false };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a User by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await User.findByIdAndUpdate(id, body, {
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

// // Update a User password by the id in the request
// exports.updatePassword = async (id,) => {
//   try {
//     const id = req.params.id;
//     const password = req.body.password;
//     const doc = await User.findByIdAndUpdate(
//       id,
//       { password: password },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     if (!doc) {
//       return res.status(404).json({ message: "Invalid Id" });
//     }
//     res.status(200).json({ message: "Password updated" });
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };
