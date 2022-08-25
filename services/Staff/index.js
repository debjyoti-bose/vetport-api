const staff_services = require("./staff");
const staff_des_services = require("./staffDes");
const staff_shift_services = require("./staffShift");
const spec_services = require("./spec");

const services = {
  staff_services: staff_services,
  staff_des_services: staff_des_services,
  spec_services: spec_services,
  staff_shift_services: staff_shift_services,
};

module.exports = {
  ...services,
};
