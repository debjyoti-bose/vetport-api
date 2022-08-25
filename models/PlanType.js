const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const PlantypeModel = mongoose.model("plan_type", plantype);
module.exports = PlantypeModel;
