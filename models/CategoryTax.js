const mongoose = require("mongoose");
const Plancategory = require("./PlanCategory");
const Schema = mongoose.Schema;

const categorytax = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: Plancategory.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const CategoryTaxModel = mongoose.model("cat_tax", categorytax);
module.exports = CategoryTaxModel;
