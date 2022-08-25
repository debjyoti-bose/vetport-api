const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = require("./Country");
const State = require("./State");

const mclocation = new Schema(
  {
    locationName: {
      type: String,
      required: true,
      trim: true,
    },
    locationAddress: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
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

const MclocationModel = mongoose.model("mclocation", mclocation);
module.exports = MclocationModel;
