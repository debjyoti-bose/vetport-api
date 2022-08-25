const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const Patient = require("./PatientRegistration");
const Appointmenttype = require("./AppointmentType");
const AppointmentStatus = require("./AppointmentStatus");
const Staff = require("./Staff");
const Visitreason = require("./VisitReason");
const Equipment = require("./Equipment");

const appointment = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: Patient.modelName,
      required: true,
    },
    appointmentType: {
      type: Schema.Types.ObjectId,
      ref: Appointmenttype.modelName,
    },
    equipment: {
      type: Schema.Types.ObjectId,
      ref: Equipment.modelName,
    },
    reason: {
      type: Schema.Types.ObjectId,
      ref: Visitreason.modelName,
    },
    staff: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: AppointmentStatus.modelName,
    },
    // comments: {
    //   type: String,
    //   trim: true,
    // },

    // dropOff: {
    //   type: Boolean,
    //   default: false,
    // },
    // recurringAppointment: {
    //   type: Boolean,
    //   default: false,
    // },
    // emailToClient: {
    //   type: Boolean,
    //   default: false,
    // },
    // smsToClient: {
    //   type: Boolean,
    //   default: false,
    // },
    // clientRequirements: {
    //   type: String,
    //   trim: true,
    // },
  },
  { timestamps: true, strict: false }
);

const AppointmentModel = mongoose.model("appt", appointment);
module.exports = AppointmentModel;
