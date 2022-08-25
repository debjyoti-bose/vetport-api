const ClientRegistration = require("../../models/ClientRegistration");
const PatientRegistration = require("../../models/PatientRegistration");

// Find clients with no interest
exports.filterClientsWithNoInterests = async (clinic, limit, page) => {
  try {
    let filter = {};
    // filter query for conditions when clinicid is provided or not provided
    if (clinic !== undefined) {
      filter = { isInterestApply: false, clinic: clinic };
    } else {
      filter = { isInterestApply: false };
    }

    const docs = ClientRegistration.find(filter)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find Clients with no patients
exports.filterClientsWithNoPatients = async (clinic, limit, page) => {
  try {
    // Find all clients in patient collection
    const patients = await PatientRegistration.find(
      {},
      { clientId: 1, _id: 0 }
    ).lean();
    const clientIds = [];
    for (let patient of patients) {
      clientIds.push(patient.clientId);
    }

    let filter = {};
    // filter query for conditions when clinicid is provided or not provided
    if (clinic !== undefined) {
      filter = { _id: { $nin: clientIds }, clinic: clinic };
    } else {
      filter = { _id: { $nin: clientIds } };
    }

    // Find all clients with id not in clientIds array
    const docs = ClientRegistration.find(filter)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find Clients with no email
exports.filterClientsWithNoEmail = async (body, limit, page) => {
  try {
    const docs = await ClientRegistration.find({
      declineEmail: true,
      createdAt: { $gte: body.startDate, $lte: body.endDate },
    })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find number of clients registered in last 12 months
exports.filterClientsInLastYear = async (clinic) => {
  try {
    const endDate = new Date();
    const startDate = new Date(
      endDate.getFullYear() - 1,
      endDate.getMonth() + 1
    );

    let filter = {};
    // filter query for conditions when clinicid is provided or not provided
    if (clinic !== undefined) {
      filter = {
        clinic: clinic,
        createdAt: { $gte: startDate, $lte: endDate },
      };
    } else {
      filter = { createdAt: { $gte: startDate, $lte: endDate } };
    }

    // Find number of clients registered for the past 12 months
    const docs = await ClientRegistration.aggregate([
      {
        $match: filter,
      },
      {
        $group: {
          _id: { $dateToString: { format: "%m-%Y", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
    ]);
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find number of patients and clients registered in last 3 years
exports.filterClientPatients = async () => {
  try {
    const endDate = new Date(new Date().getFullYear(), 12, 31);
    const startDate = new Date(new Date().getFullYear() - 2, 0, 1);

    const pipeline = [
      { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
      {
        $group: {
          _id: {
            month: {
              $dateToString: { format: "%m", date: "$createdAt" },
            },
            year: {
              $dateToString: { format: "%Y", date: "$createdAt" },
            },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": 1 } },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          month: "$_id.month",
          count: "$count",
        },
      },
    ];

    const patientDocs = await PatientRegistration.aggregate(pipeline);
    const clientDocs = await ClientRegistration.aggregate(pipeline);

    return { patients: patientDocs, clients: clientDocs };
  } catch (error) {
    return Promise.reject(error);
  }
};
