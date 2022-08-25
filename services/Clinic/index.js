const clinic_services = require("./clinic");
const mc_loc_services = require("./mcLoc");

const services = {
  clinic_services: clinic_services,
  mc_loc_services: mc_loc_services,
};
module.exports = {
  ...services,
};
