const Appointment = require("../../models/Appointment");

// Create and Save a Appointment
exports.create = async (body) => {
  try {
    const doc = await Appointment.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Appointment from the database.
exports.findAll = async () => {
  try {
    const docs = await Appointment.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve Appointments by day/month/week and clinic
// pass fromdate and todate in route params
// Add clinic id to route params
exports.findByDate = async ({ fromDate, toDate, clinic }) => {
  try {
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 0);
    const docs = await Appointment.find({
      clinic: clinic,
      startTime: { $gte: fromDate, $lte: toDate },
    }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve Appointments by day/month/week
// pass fromdate and todate in route params
// Add clinic id to route params
exports.findByStaff = async ({ fromDate, toDate, clinic, staff }) => {
  try {
    let staffFilter = [];
    if (staff !== undefined) {
      staffFilter = { staff: { $in: staff.split(",") } };
      console.log(staffFilter);
    } else {
      staffFilter = {};
      console.log(staffFilter);
    }
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 0);
    const docs = await Appointment.find({
      ...staffFilter,
      clinic: clinic,
      startTime: { $gte: fromDate, $lte: toDate },
    }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update appointment by id
exports.update = async (id, body) => {
  try {
    const doc = await Appointment.findByIdAndUpdate(id, body, {
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
