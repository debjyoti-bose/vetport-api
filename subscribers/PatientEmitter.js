const EventEmitter = require("events");
const emitter = new EventEmitter();

// event emitter function for updating patientInfo according to patient doc update
emitter.on("updatePatientInfo", async (model, doc) => {
  try {
    await doc.populate("clientId");
    const client = doc.clientId;
    await model.findByIdAndUpdate(doc._id, {
      $set: {
        patientInfo: `${[
          ...client.firstName.split(" "),
          ...client.lastName.split(" "),
          ...client.address1.split(" "),
          ...client.address2.split(" "),
          client.email,
          client.phoneNumber[0].pnumber,
          ...doc.patientName.split(" "),
        ].join(" ")}`,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = emitter;
