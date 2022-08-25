const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanItem = require("./PlanItem");
const VendorItem = require("./VendorItem");

const stockbasket = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planItem: [
      {
        type: Schema.Types.ObjectId,
        ref: PlanItem.modelName,
      },
    ],
    vendorItem: [
      {
        type: Schema.Types.ObjectId,
        ref: VendorItem.modelName,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    statics: false,
  }
);

const StockbasketModel = mongoose.model("basket", stockbasket);
module.exports = StockbasketModel;
