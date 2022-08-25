const express = require("express");
const router = express.Router();

const { cnt } = require("../../../../controllers/Country");

router.post("/save_country", cnt.create);
router.get("/get_country", cnt.findAll);

module.exports = router;
