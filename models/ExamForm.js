const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Species = require("./Species");

const examform = new Schema(
  {
    species: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    vitals: {
      type: Boolean,
      default: false,
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

const ExamFormModel = mongoose.model("exam_form", examform);
module.exports = ExamFormModel;
