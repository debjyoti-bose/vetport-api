const express = require("express");
const router = express.Router();

const { app } = require("../../../../controllers/Appointment");

router.post("/save_appointment", app.create);
router.get("/get_appointment", app.findAll);
router.get("/get_appointmentByDate/:clinic/:from/:to", app.findByDate);
router.get("/get_appointmentByStaff/:clinic/:date", app.findByStaff);
router.put("/update_appointment/:id", app.update);

// router.get("/get_appointmentByWeek/:from/:to", appointment.findByWeek);
// router.get("/get_appointmentByMonth/:year/:month", appointment.findByMonth);

module.exports = router;
