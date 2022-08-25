const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanItem = require("../models/PlanItem");

const reminder = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    planItemId: [
      {
        type: Schema.Types.ObjectId,
        ref: PlanItem.modelName,
      },
    ],
    // remindSelf: {
    //   type: Boolean,
    //   default: true,
    // },
    // sendReminder: {
    //   type: Number,
    //   required: true,
    // },
    // stopReminder: {
    //   type: Number,
    //   required: true,
    // },
    // lifeCycle: {
    //   type: Number,
    //   required: true,
    // },
    mailPostcardReminders: {
      type: Boolean,
      default: false,
    },
    emailReminders: {
      type: Boolean,
      default: false,
    },
    smsReminders: {
      type: Boolean,
      default: false,
    },
    encounterList: {
      type: Boolean,
      default: false,
    },
    phoneCallbackList: {
      type: Boolean,
      default: false,
    },
    statements: {
      type: Boolean,
      default: false,
    },
    invoices: {
      type: Boolean,
      default: false,
    },
    futureReminderPlanning: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Boolean,
      default: true,
    },
    pastServices: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const ReminderModel = mongoose.model("reminder", reminder);
module.exports = ReminderModel;
