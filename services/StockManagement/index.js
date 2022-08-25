const stock_fac_services = require("./stockFac");
const stock_bskt_services = require("./stockBskt");

const stock_services = {
  stock_bskt_services: stock_bskt_services,
  stock_fac_services: stock_fac_services,
};

module.exports = {
  ...stock_services,
};
