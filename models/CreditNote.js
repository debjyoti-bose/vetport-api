const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Status = require("./Status");
const CreditType = require("./CreditType");
const PaymentType = require("./PaymentType");
const Staff = require("./Staff");

const creditnote = new Schema(
  {
    credit_type: {
      type: Schema.Types.ObjectId,
      ref: CreditType.modelName,
      required: true,
    },
    paytypeid: {
      type: Schema.Types.ObjectId,
      ref: PaymentType.modelName,
    },
    amount: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    createdby: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
    creditnoteno: {
      type: Number,
    },
    depositstatus: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const CreditnoteModel = mongoose.model("credit_note", creditnote);
module.exports = CreditnoteModel;
