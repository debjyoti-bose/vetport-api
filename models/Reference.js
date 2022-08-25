const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reference = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ReferenceModel = mongoose.model("reference", reference);
module.exports = ReferenceModel;
