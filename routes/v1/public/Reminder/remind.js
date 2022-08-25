const express = require("express");
const router = express.Router();

const { remind } = require("../../../../controllers/Reminder");

router.post("/save_reminder", remind.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_reminder", remind.findAll);
router.get("/get_reminderById/:id", remind.findById);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/filter_reminderbyname/:name", remind.findByTitle);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_reminderbyquery", remind.findByQuery);
router.put("/update_reminder/:id", remind.update);

// router.route("/").get(reminder.find).post(reminder.create);
// router.route("/:id").get(reminder.find).put(reminder.update);
// router.route("/filter/:_id?/:planItemId?/:status?").get(reminder.findByQuery);

module.exports = router;
