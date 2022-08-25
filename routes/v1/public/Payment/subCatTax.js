const express = require("express");
const router = express.Router();

const { subcat_tax } = require("../../../../controllers/Payment");

router.post("/save_subCategoryTax", subcat_tax.create);
router.get("/get_subCategoryTax", subcat_tax.findAll);
//router.get("/get_categoryTaxById", categorytax.findOne);
router.put("/update_subCategoryTax/:id", subcat_tax.update);
module.exports = router;
