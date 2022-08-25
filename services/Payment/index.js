const cat_tax_services = require("./catTax");
const subcat_tax_services = require("./subCatTax");
const creditnote_services = require("./creditNote");
const paygrp_services = require("./payGrp");
const paytype_services = require("./payType");
const discount_services = require("./discount");

const payment_services = {
  cat_tax_services: cat_tax_services,
  subcat_tax_services: subcat_tax_services,
  creditnote_services: creditnote_services,
  paygrp_services: paygrp_services,
  paytype_services: paytype_services,
  discount_services: discount_services,
};
module.exports = {
  ...payment_services,
};
