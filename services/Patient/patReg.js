const PatientRegistration = require("../../models/PatientRegistration");
const patientEmitter = require("../../subscribers/PatientEmitter");

// Create and Save a new Patient
exports.create = async (body) => {
  try {
    const doc = new PatientRegistration(body);
    await doc.populate({ path: "clientId" });
    console.log(doc);
    const client = doc.clientId;

    doc.patientInfo = [
      ...client.firstName.split(" "),
      ...client.lastName.split(" "),
      ...client.address1.split(" "),
      ...client.address2.split(" "),
      client.email,
      // client.phoneNumber[0].pnumber,
      ...doc.patientName.split(" "),
    ].join(" ");
    await doc.save();

    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find all Patients
exports.findAll = async () => {
  try {
    const docs = await PatientRegistration.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find Patient by Id
exports.findOne = async (id) => {
  try {
    const doc = await PatientRegistration.findById(id).lean();
    if (!doc) {
      return Promise.reject("Invalid id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find  Patient Name according to client Id
exports.verifyPatientName = async (query) => {
  try {
    const doc = await PatientRegistration.find(query).lean();
    if (!doc) {
      return { patientNameExists: false };
    }
    return { patientNameExists: true };
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update a Patient by the id in the request
exports.update = async (id, body) => {
  try {
    const doc = await PatientRegistration.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }

    patientEmitter.emit("updatePatientInfo", PatientRegistration, doc);

    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};
