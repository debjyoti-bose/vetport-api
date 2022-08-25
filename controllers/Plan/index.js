const plan_cntlr = {
  grp_pln: require("./grpPlan"),
  pln_act: require("./planAct"),
  pln_cat: require("./planCat"),
  planitem: require("./planItem"),
  pln_subcat: require("./planSubCat"),
  pln_type: require("./planType"),
};

module.exports = {
  ...plan_cntlr,
};
