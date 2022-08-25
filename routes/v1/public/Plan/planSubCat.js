const express = require("express");
const router = express.Router();

const { pln_subcat } = require("../../../../controllers/Plan");

router.post("/save_plansubcategory", pln_subcat.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_plansubcategory", pln_subcat.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get(
  "/get_plansubcategory_byquery/:planCategoryId/:status?",
  pln_subcat.findByPlanCategory
);
router.put("/update_plansubcategory/:id", pln_subcat.update);

module.exports = router;
