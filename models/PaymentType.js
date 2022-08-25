const mongoose = require("mongoose");
const PaymentGroup = require("./PaymentGroup");
const Schema = mongoose.Schema;

const paymenttype = new Schema(
  {
    paymentGroup: {
      type: Schema.Types.ObjectId,
      ref: PaymentGroup.modelName,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    allowGateway: {
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

const PaymentTypeModel = mongoose.model("pay_type", paymenttype);
module.exports = PaymentTypeModel;
