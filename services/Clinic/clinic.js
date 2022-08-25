const Clinic = require("../../models/Clinic");

// Create and Save a new Clinic
exports.create = async (body) => {
  try {
    const doc = await Clinic.create(body);
    if (doc) {
      return doc;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve all Clinic from the database
exports.findAll = async () => {
  try {
    const docs = await Clinic.find({}).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find a single clinic by id
exports.findOne = async (id) => {
  try {
    const doc = await Clinic.findById(id).lean();
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve Clinic by clinic type, status and referral
exports.findByTypeAndStatus = async ({ status, referral, clinicType }) => {
  try {
    const query = {};
    query["status"] = status === "true";
    query["clinicType.referral"] = referral === "true";

    if (clinicType !== undefined) {
      query[`clinicType.${clinicType}`] = true;
    }
    const doc = await Clinic.find(query).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve default clinic
exports.getDefaultClinic = async () => {
  try {
    const doc = await Clinic.find({ default: true }).lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

//Retrieve Clinic by name
exports.filterByClinicName = async () => {
  try {
    const docs = await Clinic.find({}, { title: 1 }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// update a clinic by id
exports.update = async (id, body) => {
  try {
    const doc = await Clinic.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return Promise.reject("Invalid Id");
    }
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// filter refferal clinic
// exports.getRefferalClinic = async (req, res) => {
//   try {
//     const docs = await Clinic.find(
//       {
//         clinic_type: { $elemMatch: { $eq: "Refferal" } },
//       },
//       { title: 1 }
//     );

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
