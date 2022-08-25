const EventEmitter = require("events");
const emitter = new EventEmitter();

// event emitter function for updating patientInfo according to client doc update
emitter.on("updatePatientInfo", async (model, doc) => {
  try {
    const docs = await model.find({ clientId: doc._id }).lean();
    const bulkArr = [];

    for (let result of docs) {
      bulkArr.push({
        updateOne: {
          filter: { _id: result._id },
          update: {
            $set: {
              patientInfo: [
                ...doc.firstName.split(" "),
                ...doc.lastName.split(" "),
                ...doc.address1.split(" "),
                ...doc.address2.split(" "),
                doc.email,
                doc.phoneNumber[0].pnumber,
                ...result.patientName.split(" "),
              ].join(" "),
            },
          },
        },
      });
    }

    model.bulkWrite(bulkArr);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = emitter;
