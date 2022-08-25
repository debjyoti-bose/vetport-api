const pat_cntlr = {
  breed: require("./breed"),
  color: require("./color"),
  pat_reg: require("./patReg"),
  sex: require("./sex"),
  species: require("./species"),
};

module.exports = {
  ...pat_cntlr,
};
