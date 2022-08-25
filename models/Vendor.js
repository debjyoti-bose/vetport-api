const mongoose = require("mongoose");
const Country = require("./Country");
const State = require("./State");
const Vendortype = require("./VendorType");
const Schema = mongoose.Schema;

const vendor = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    vendorType: {
      type: Schema.Types.ObjectId,
      ref: Vendortype.modelName,
      required: true,
    },
    phoneNumber: {
      type: [Object],
      required: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const VendorModel = mongoose.model("vendor", vendor);
module.exports = VendorModel;
