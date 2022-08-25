const express = require("express");
const router = express.Router();

const { phone_type } = require("../../../../controllers/Phone");

router.post("/save_phonetype", phone_type.create);
router.get("/get_phonetype", phone_type.findAll);
router.put("/update_phonetype/:id", phone_type.update);

module.exports = router;
