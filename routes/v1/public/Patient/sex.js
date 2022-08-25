const express = require("express");
const router = express.Router();

const { sex } = require("../../../../controllers/Patient");

router.post("/save_sex", sex.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_sex", sex.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_sex_byspecies", sex.getSexBySpecies);
router.put("/update_sex/:id", sex.update);

module.exports = router;
