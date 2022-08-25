const express = require("express");
const router = express.Router();

const { stock_bskt } = require("../../../../controllers/StockManagement");

router.post("/save_stockBasket", stock_bskt.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_stockBasket", stock_bskt.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_stockBasketByName/:name?", stock_bskt.findByName);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/filter_stockBasketByQuery", stock_bskt.filterByQuery);
router.put("/update_stockBasket/:id", stock_bskt.update);
router.patch("/map_planitem/:id/:planitem", stock_bskt.mapPlanItem);
router.patch("/map_vendoritem/:id/:vendoritem", stock_bskt.mapVendorItem);
router.patch("/delete_planitem/:id/:planitem", stock_bskt.removePlanItem);
router.patch("/delete_vendoritem/:id/:vendoritem", stock_bskt.removeVendorItem);

module.exports = router;
