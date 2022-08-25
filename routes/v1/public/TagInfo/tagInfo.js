const express = require("express");
const router = express.Router();

const { tag_info } = require("../../../../controllers/TagInfo");

router.post("/save_tag_info", tag_info.create);
router.get("/get_tag_info", tag_info.findAll);

module.exports = router;
