const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Client = require("./ClientRegistration");
const Species = require("./Species");
const Staff = require("./Staff");
const Breed = require("./Breed");
const Sex = require("./Sex");
const Color = require("./Color");

const patientregistration = new Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: Client.modelName,
    },
    speciesId: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
      required: true,
    },
    breedId: {
      type: Schema.Types.ObjectId,
      ref: Breed.modelName,
    },
    sexId: {
      type: Schema.Types.ObjectId,
      ref: Sex.modelName,
    },
    colorId: {
      type: Schema.Types.ObjectId,
      ref: Color.modelName,
    },
    preferredProvider: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
    patientInfo: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// patientregistration.pre("save", async function (next) {
//   await this.populate("clientId");
//   const client = this.clientId;

//   this.patientInfo = [
//     ...client.firstName.split(" "),
//     ...client.lastName.split(" "),
//     ...client.address1.split(" "),
//     ...client.address2.split(" "),
//     client.email,
//     client.phoneNumber[0].pnumber,
//     ...this.patientName.split(" "),
//   ].join(" ");
//   next();
// });

// patientregistration.post("findOneAndUpdate", async function (doc, next) {
//   await doc.populate("clientId");
//   const client = doc.clientId;
//   await doc.updateOne({
//     patientInfo: `${[
//       ...client.firstName.split(" "),
//       ...client.lastName.split(" "),
//       ...client.address1.split(" "),
//       ...client.address2.split(" "),
//       client.email,
//       client.phoneNumber[0].pnumber,
//       ...doc.patientName.split(" "),
//     ].join(" ")}`,
//   });
// });

const PatientModel = mongoose.model("patient", patientregistration);
module.exports = PatientModel;
