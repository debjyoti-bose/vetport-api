const { cl_rept_services } = require("../../services");

// Find clients with no interests
exports.filterClientsWithNoInterests = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const clinic = req.params.clinic;
    const data = await cl_rept_services.filterClientsWithNoInterests(
      clinic,
      limit,
      page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find clients with no patients
exports.filterClientsWithNoPatients = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const clinic = req.params.clinic;
    const data = await cl_rept_services.filterClientsWithNoPatients(
      clinic,
      limit,
      page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find clients with no email
exports.filterClientsWithNoEmail = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const body = {
      startDate: new Date(req.params.startdate),
      endDate: new Date(req.params.enddate),
    };
    const data = await cl_rept_services.filterClientsWithNoEmail(
      body,
      limit,
      page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find number of clients registered in last 12 months
exports.filterClientsInLastYear = async (req, res) => {
  try {
    const clinic = req.params.clinic;
    const data = await cl_rept_services.filterClientsInLastYear(clinic);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find number of patients and clients registered in last 3 years
exports.filterClientPatients = async (req, res) => {
  try {
    const data = await cl_rept_services.filterClientPatients();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
