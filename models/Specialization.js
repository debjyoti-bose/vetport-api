const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialization = new Schema(
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

const SpecializationModel = mongoose.model("specialization", specialization);
module.exports = SpecializationModel;
