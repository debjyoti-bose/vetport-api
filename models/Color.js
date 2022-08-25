const mongoose = require("mongoose");
const Species = require("./Species");
const Schema = mongoose.Schema;

const color = new Schema(
  {
    species_id: [
      {
        type: Schema.Types.ObjectId,
        ref: Species.modelName,
      },
    ],
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const ColorModel = mongoose.model("color", color);
module.exports = ColorModel;
