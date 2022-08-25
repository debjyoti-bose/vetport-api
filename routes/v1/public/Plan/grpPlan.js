const express = require("express");
const router = express.Router();

const { grp_pln } = require("../../../../controllers/Plan");

router.post("/save_groupPlanitem", grp_pln.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_groupPlanItem", grp_pln.findAll);
router.get("/get_groupPlanItemById/:id", grp_pln.findById);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/filter_groupPlanItemByQuery", grp_pln.filterByQuery);
router.put("/update_groupPlanItem/:id", grp_pln.update);

// router.get("/filter_groupPlanItemByName/:name", groupPlanItem.filterByName);

module.exports = router;
