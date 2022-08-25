const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitreason = new Schema(
  {
    title: {
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

const VisitreasonModel = mongoose.model("visitreason", visitreason);
module.exports = VisitreasonModel;
