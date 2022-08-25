const mongoose = require("mongoose");
const PlanItem = require("./PlanItem");
const Clinic = require("./Clinic");
const Status = require("./Status");
const Schema = mongoose.Schema;

const plancost = new Schema(
  {
    planitemid: {
      type: Schema.Types.ObjectId,
      ref: PlanItem.modelName,
    },
    clinicid: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
    },
    cliniccost: {
      type: Number,
      default: 0,
    },
    markupcost: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    servicetax: {
      type: Number,
      default: 0,
    },
    uprice: {
      type: Number,
      default: 0,
    },
    calc_format: {
      type: Schema.Types.ObjectId,
      ref: Status.modelName,
    },
    mincost: {
      type: Number,
      default: 0,
    },
    lowestimate: {
      type: Number,
      default: 0,
    },
    extension: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    maxcost: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, strict: false }
);

const PlanCostModel = mongoose.model("plancost", plancost);
module.exports = PlanCostModel;
