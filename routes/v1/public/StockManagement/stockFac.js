const express = require("express");
const router = express.Router();

const { stock_fac } = require("../../../../controllers/StockManagement");

router.post("/save_stock_facility", stock_fac.create);
router.get("/get_stock_facility", stock_fac.findAll);
router.put("/update_stock_facility/:id", stock_fac.update);

module.exports = router;
