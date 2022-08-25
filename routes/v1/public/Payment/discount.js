const express = require("express");
const router = express.Router();

const { discount } = require("../../../../controllers/Payment");

router.post("/save_discount", discount.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_discount", discount.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_getDiscountByName/:name?", discount.findByName);
router.put("/update_discount/:id", discount.update);

module.exports = router;
