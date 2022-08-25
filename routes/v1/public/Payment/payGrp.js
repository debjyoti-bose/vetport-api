const express = require("express");
const router = express.Router();

const { pay_grp } = require("../../../../controllers/Payment");

router.post("/save_paymentGroup", pay_grp.create);
router.get("/get_paymentGroup", pay_grp.findAll);
router.get("/get_paymentGroupByName/:name?", pay_grp.findByName);

module.exports = router;
