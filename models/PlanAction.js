const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planaction = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const PlanactionModel = mongoose.model("planaction", planaction);
module.exports = PlanactionModel;
