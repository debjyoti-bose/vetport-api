const payment_cntlr = {
  cat_tax: require("./catTax"),
  credit_note: require("./creditNote"),
  discount: require("./discount"),
  pay_grp: require("./payGrp"),
  pay_type: require("./payType"),
  subcat_tax: require("./subCatTax"),
};

module.exports = {
  ...payment_cntlr,
};
