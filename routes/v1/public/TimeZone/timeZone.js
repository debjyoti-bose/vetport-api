const express = require("express");
const router = express.Router();

const { time_zone } = require("../../../../controllers/TimeZone");

router.post("/save_timezone", time_zone.create);
router.get("/get_timezone", time_zone.findAll);

module.exports = router;
