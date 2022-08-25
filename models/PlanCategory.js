const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Plantype = require("./PlanType");
const Planaction = require("./PlanAction");

const plancategory = new Schema(
  {
    plantype_id: {
      type: Schema.Types.ObjectId,
      ref: Plantype.modelName,
    },
    plan_category: {
      type: String,
      required: true,
      trim: true,
    },
    planaction_id: {
      type: Schema.Types.ObjectId,
      ref: Planaction.modelName,
    },
  },
  { timestamps: true, strict: false }
);

const PlancategoryModel = mongoose.model("plan_cat", plancategory);
module.exports = PlancategoryModel;
