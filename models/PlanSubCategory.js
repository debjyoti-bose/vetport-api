const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanType = require("./PlanType");
const PlanAction = require("./PlanAction");
const PlanCategory = require("./PlanCategory");

const planSubCategory = new Schema(
  {
    plantype_id: {
      type: Schema.Types.ObjectId,
      ref: PlanType.modelName,
    },
    plancategory_id: {
      type: Schema.Types.ObjectId,
      ref: PlanCategory.modelName,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planaction_id: {
      type: Schema.Types.ObjectId,
      ref: PlanAction.modelName,
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

const PlanSubCategoryModel = mongoose.model("plan_subcat", planSubCategory);
module.exports = PlanSubCategoryModel;
