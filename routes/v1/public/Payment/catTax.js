const express = require("express");
const router = express.Router();

const { cat_tax } = require("../../../../controllers/Payment");

router.post("/save_categoryTax", cat_tax.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_categoryTax", cat_tax.findAll);
//router.get("/get_categoryTaxById", categorytax.findOne);
router.put("/update_categoryTax/:id", cat_tax.update);

module.exports = router;
