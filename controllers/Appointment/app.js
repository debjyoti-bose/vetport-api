const { app_services } = require("../../services");
// Create and Save a Appointment
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await app_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Appointment from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await app_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Appointments by day/month/week and clinic
// pass fromdate and todate in route params
// Add clinic id to route params
exports.findByDate = async (req, res) => {
  try {
    const body = {
      fromDate: new Date(req.params.from),
      toDate: new Date(req.params.to),
      clinic: req.params.clinic,
    };
    const data = await app_services.findByDate(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Appointments by date, staff clinic
// pass date in params
// Add clinic id to route params
exports.findByStaff = async (req, res) => {
  try {
    const body = {
      fromDate: new Date(req.params.date),
      toDate: new Date(req.params.date),
      clinic: req.params.clinic,
      staff: req.query.staff,
    };

    const data = await app_services.findByStaff(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update appointment by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await app_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Appointments by month
// exports.findByWeek = (req, res) => {
//   const fromDate = new Date(req.params.from);
//   const toDate = new Date(req.params.to);
//   fromDate.setHours(0, 0, 0, 0);
//   toDate.setHours(24, 0, 0, 0);

//   console.log(toDate.toLocaleString());
//   console.log(fromDate.toLocaleString());

//   Appointment.find().exec((err, result) => {
//     if (err) {
//       return res.status(500).json(error.message);
//     }

//     const docs = result.filter((doc) => {
//       return (
//         doc.startTime >= fromDate ||
//         doc.startTime <= toDate ||
//       );
//     });
//     res.status(200).json(docs);
//   });
// };

// // Retrieve Appointments by month
// exports.findByMonth = (req, res) => {
//   const date = new Date(req.params.year, req.params.month);

//   Appointment.find().exec((err, result) => {
//     if (err) {
//       return res.status(500).json(error.message);
//     }

//     const docs = result.filter((doc) => {
//       if (
//         doc.startTime.getFullYear() === date.getFullYear() ||
//         doc.endTime.getFullYear() === date.getFullYear()
//       ) {
//         return (
//           doc.startTime.getMonth() === date.getMonth() ||
//           doc.endTime.getMonth() === date.getMonth()
//         );
//       }
//     });
//     res.status(200).json(docs);
//   });
// };
