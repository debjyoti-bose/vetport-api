// Create a new EquipmentCategory
const broadcast = require("../../subscribers/Broadcast");

exports.create = async (req, res) => {
  try {
    broadcast.emit("notification", "test123_");
    res.status(201).json("test");
  } catch (error) {
    res.status(500).send(error);
  }
};
