const { clinic_services } = require("../../services");

// Create and Save a new Clinic
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await clinic_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Clinic from the database
exports.findAll = async (req, res) => {
  try {
    const data = await clinic_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single clinic by id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await clinic_services.findOne(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Clinic by clinic type, status and referral
exports.findByTypeAndStatus = async (req, res) => {
  try {
    const body = {
      status: req.params.status,
      referral: req.params.referral,
      clinicType: req.params.clinictype,
    };
    const data = await clinic_services.findByTypeAndStatus(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve default clinic
exports.getDefaultClinic = async (req, res) => {
  try {
    const data = await clinic_services.getDefaultClinic();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Retrieve Clinic by name
exports.filterByClinicName = async (req, res) => {
  try {
    const data = await clinic_services.filterByClinicName();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a clinic by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await clinic_services.update(id, body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
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
