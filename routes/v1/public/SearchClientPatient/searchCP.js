const express = require("express");
const router = express.Router();

const { search_cp } = require("../../../../controllers/SearchClientPatient");

// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/", search_cp.findByQuery);
// router.post("/", searchClientPatient.findByQuery);

module.exports = router;
