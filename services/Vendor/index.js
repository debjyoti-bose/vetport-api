const vndr_services = require("./vndr");
const vndritem_services = require("./vndrItem");
const vndrtype_services = require("./vndrType");
const cnttype_services = require("./cntType");
const mfr_services = require("./mfr");
const pkgtype_services = require("./pkgType");

const vendr_services = {
  vndr_services: vndr_services,
  vndritem_services: vndritem_services,
  vndrtype_services: vndrtype_services,
  cnttype_services: cnttype_services,
  mfr_services: mfr_services,
  pkgtype_services: pkgtype_services,
};
module.exports = {
  ...vendr_services,
};
