const pat_reg_services = require("./patReg");
const breed_services = require("./breed");
const color_services = require("./color");
const sex_services = require("./sex");
const species_services = require("./species");

const patient_services = {
  pat_reg_services: pat_reg_services,
  breed_services: breed_services,
  color_services: color_services,
  sex_services: sex_services,
  species_services: species_services,
};
module.exports = {
  ...patient_services,
};
