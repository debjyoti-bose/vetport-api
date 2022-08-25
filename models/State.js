const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = require("./Country");

const state = new Schema(
  {
    country: {
      type: Schema.Types.ObjectId,
      ref: Country.modelName,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    abbreviation: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const StateModel = mongoose.model("state", state);
module.exports = StateModel;
