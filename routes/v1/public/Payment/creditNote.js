const express = require("express");
const router = express.Router();

const { credit_note } = require("../../../../controllers/Payment");

router.post("/save_creditNote", credit_note.create);
router.get("/get_creditNote", credit_note.findAll);

module.exports = router;
