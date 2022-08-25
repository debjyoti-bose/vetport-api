const express = require("express");
const router = express.Router();

const { species } = require("../../../../controllers/Patient");

router.post("/save_species", species.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_species", species.findAll);
router.put("/update_species/:id", species.update);

module.exports = router;
