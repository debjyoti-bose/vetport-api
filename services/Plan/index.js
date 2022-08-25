const plncost_services = require("./planCost");
const plnitm_services = require("./planItem");
const pln_act_services = require("./planAct");
const plncat_services = require("./planCat");
const pln_subcat_services = require("./planSubCat");
const plntype_services = require("./planType");
const grp_pln_services = require("./grpPlan");

const plan_services = {
  plncost_services: plncost_services,
  plnitm_services: plnitm_services,
  pln_act_services: pln_act_services,
  plncat_services: plncat_services,
  pln_subcat_services: pln_subcat_services,
  plntype_services: plntype_services,
  grp_pln_services: grp_pln_services,
};

module.exports = {
  plan_services,
};
