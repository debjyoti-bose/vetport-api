const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Plancategory = require("./PlanCategory");
const PlanSubCategory = require("./PlanSubCategory");
const Status = require("./Status");
const Clinic = require("./Clinic");
const Species = require("./Species");
const Breed = require("./Breed");

const planitem = new Schema(
  {
    pricingStrategyId: {
      type: Schema.Types.ObjectId,
      ref: Status.modelName,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planCategory_id: {
      type: Schema.Types.ObjectId,
      ref: Plancategory.modelName,
    },
    planSubCategory_id: {
      type: Schema.Types.ObjectId,
      ref: PlanSubCategory.modelName,
    },
    weightRange: {
      type: Object,
      required: true,
    },
    clinic: [
      {
        _id: false,
        clinicid: { type: Schema.Types.ObjectId, ref: Clinic.modelName },
        active: { type: Boolean, default: true },
      },
    ],
    speciesId: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    breedId: {
      type: Schema.Types.ObjectId,
      ref: Breed.modelName,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: Status.modelName,
    },
  },
  { timestamps: true, strict: false }
);

const PlanitemModel = mongoose.model("planitem", planitem);
module.exports = PlanitemModel;
