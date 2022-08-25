const mongoose = require("mongoose");
const Species = require("./Species");
const Schema = mongoose.Schema;

const historyform = new Schema(
  {
    speciesId: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    name: {
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

const HistoryFormModel = mongoose.model("hist_form", historyform);
module.exports = HistoryFormModel;
