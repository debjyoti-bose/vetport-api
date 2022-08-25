const mongoose = require("mongoose");
const Species = require("./Species");
const Schema = mongoose.Schema;

const breed = new Schema(
  {
    species_id: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const BreedModel = mongoose.model("breed", breed);
module.exports = BreedModel;
