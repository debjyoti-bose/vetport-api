const express = require("express");
const router = express.Router();

const { evtSrc } = require("../../../../controllers/Events");

// pass page and limit as query fields for pagination ( default limit=10, page=1)
router.get("/", evtSrc.create);

module.exports = router;
