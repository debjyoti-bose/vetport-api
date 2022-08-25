const express = require("express");
const router = express.Router();

const { planitem } = require("../../../../controllers/Plan");

router.post("/save_planitem", planitem.create);
router.get("/get_planitem", planitem.findAll);
router.get("/get_planitemById/:id/:clinicid", planitem.findOne);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_planitemByName/:clinicid/:name?", planitem.findByName);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
// pass plancategory, plansubcategory, species as query
router.get("/get_planitemByQuery", planitem.findByQuery);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get(
  "/get_planitemByPlanaction/:clinicid/:planaction",
  planitem.findByPlanaction
);
router.get(
  "/get_plancostByPlanitem/:planitem",
  planitem.findPlanCostByPlanItem
);
router.put("/update_planitem/:id", planitem.update);
router.put("/update_plancost/:planitem", planitem.updatePlanCost);

// router.get(
//   "/get_planitemByQuery/plancategory/:planCategory_id?/plansubcategory/:planSubCategory_id?/species/:speciesId?",
//   planitem.findByQuery
// );

module.exports = router;
