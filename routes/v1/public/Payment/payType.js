const express = require("express");
const router = express.Router();

const { pay_type } = require("../../../../controllers/Payment");

router.post("/save_paymentType", pay_type.create);
router.get("/get_paymentType", pay_type.findAll);
router.put("/update_paymentType/:id", pay_type.update);
router.get("/get_paymentTypeByName/:name?", pay_type.findByName);
// //router.patch(
//   "/update_default_paymentType",
//   paymenttype.updateDefaultPaymentType
// );
module.exports = router;
