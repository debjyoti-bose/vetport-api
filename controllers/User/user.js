const { user_services } = require("../../services");

//Create a new User
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await user_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all User from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await user_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Verify if user id exists or not
exports.getUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await user_services.getUserId(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await user_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Update a User password by the id in the request
// exports.updatePassword = async (req, res) => {
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

// // Update a User password by the id in the request
// exports.updatePassword = async (req, res) => {
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
//     if (doc.length === 0) {
//       return res.status(404).json({ message: "Invalid Id" });
//     }
//     res.status(200).json({ message: "Password updated" });
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };
