const express = require("express");
const router = express.Router();

const { client_reg } = require("../../../../controllers/Client");

router.post("/save_client", client_reg.create);
//router.get("/get", clientregistration.findAll);
// changed clientById to clientsById
router.get("/get_clientById/:id", client_reg.findOne);
router.put("/update_client/:id", client_reg.update);
//router.get("/getpatient/:_id", clientregistration.getPatient)

router.get("/verify_clientemail/:email", client_reg.verifyClientEmail);
router.get("/verify_clientpnumber/:pnumber", client_reg.verifyClientPnumber);

module.exports = router;
