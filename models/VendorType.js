const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendortype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const VendortypeModel = mongoose.model("vendortype", vendortype);
module.exports = VendortypeModel;
