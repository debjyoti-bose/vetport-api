const express = require("express");
const router = express.Router();

const { breed } = require("../../../../controllers/Patient");

router.post("/save_breed", breed.create);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_breed", breed.findAll);
// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/get_breed_bySpeciesId", breed.getBreedBySpeciesId);
router.put("/update_breed/:id", breed.update);

module.exports = router;
