const express = require("express");
const router = express.Router();

const { client_rpt } = require("../../../../controllers/Reports");

router.get(
  "/rpt_client_without_interest/:clinic?",
  client_rpt.filterClientsWithNoInterests
);
router.get("/rpt_client_pat/:clinic?", client_rpt.filterClientsWithNoPatients);
router.get(
  "/rpt_declinedornotgiven_email/:startdate/:enddate",
  client_rpt.filterClientsWithNoEmail
);
router.get(
  "/fetch_12mons_client_number/:clinic?",
  client_rpt.filterClientsInLastYear
);
router.get("/rpt_client_patient", client_rpt.filterClientPatients);

module.exports = router;
