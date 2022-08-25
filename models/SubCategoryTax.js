const mongoose = require("mongoose");
const Plancategory = require("./PlanCategory");
const PlanSubCategory = require("./PlanSubCategory");
const Schema = mongoose.Schema;

const subcategorytax = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: Plancategory.modelName,
      required: true,
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: PlanSubCategory.modelName,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const SubCategoryTaxModel = mongoose.model("sub_cattax", subcategorytax);
module.exports = SubCategoryTaxModel;
