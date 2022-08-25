const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Encounter = require("./Encounter");

const followup = new Schema(
  {
    provider: {
      type: Object,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
    comment: {
      type: Object,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    encounter_Id: {
      type: Schema.Types.ObjectId,
      ref: Encounter.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const FollowupModel = mongoose.model("followup", followup);
module.exports = FollowupModel;
