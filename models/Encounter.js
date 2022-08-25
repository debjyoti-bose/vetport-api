const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounter = new Schema(
  {
    encounterName: {
      type: String,
      required: true,
      trim: true,
    },

    des: {
      type: String,
      required: true,
      trim: true,
    },

    provider: {
      type: Object,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const EncounterModel = mongoose.model("encounter", encounter);
module.exports = EncounterModel;
