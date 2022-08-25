const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Status = require("./Status");

const credittype = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: Status.modelName,
    },
    active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const CredittypeModel = mongoose.model("credit_type", credittype);
module.exports = CredittypeModel;
