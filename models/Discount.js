const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discount = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    validfrom: {
      type: String,
      trim: true,
      required: true,
    },
    never_Expire: {
      type: Boolean,
    },
    coupon_type: {
      type: Array,
    },
    value: {
      type: String,
      trim: true,
      required: true,
    },
    enterDes: {
      type: String,
      trim: true,
    },
    default: {
      type: Boolean,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const DiscountModel = mongoose.model("discount", discount);
module.exports = DiscountModel;
