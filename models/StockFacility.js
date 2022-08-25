const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Country = require("./Country");
const State = require("./State");

const stockfacility = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: State.modelName,
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
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
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

const StockfacilityModel = mongoose.model("facility", stockfacility);
module.exports = StockfacilityModel;
