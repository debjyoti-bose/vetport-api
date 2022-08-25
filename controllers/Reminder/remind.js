const { remind_services } = require("../../services");

//Create a new Reminder
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await remind_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Find all Reminders with pagination
exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await remind_services.findAll(limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find reminder by id
exports.findById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await remind_services.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Filter Reminders by title with pagination
exports.findByTitle = async (req, res) => {
  try {
    const name = req.params.name;
    const { page = 1, limit = 10 } = req.query;
    const data = await remind_services.findByTitle(name, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Find Reminders by planitem, reminder, status with pagination
exports.findByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...query } = req.query;
    const data = await remind_services.findByQuery(query, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// //Find all Reminders without pagination
// exports.findAll = async (req, res) => {
//   try {
//     const data = await reminder_services.findAll();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// //Filter Reminders by title without pagination
// exports.findByTitle = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const data = await reminder_services.findByTitle(name);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// //Find Reminders by planitem, reminder, status without pagination
// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query;
//     const data = await reminder_services.findByQuery(query);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

//Update the Reminder by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await remind_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
