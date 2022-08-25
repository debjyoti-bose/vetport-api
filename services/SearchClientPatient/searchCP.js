const mongoose = require("mongoose");
const PatientRegistration = require("../../models/PatientRegistration");
const objectId = mongoose.Types.ObjectId;

// Find all client/patient that match the query
exports.findByQuery = async (body, limit, page) => {
  try {
    const query = body.query;
    // let startTimer = new Date().getTime();
    let filter = {};

    if (objectId.isValid(query)) {
      filter = { $or: [{ _id: query }, { clientId: query }] };
    } else {
      filter = { $text: { $search: query } };
    }

    const docs = await PatientRegistration.find(filter)
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();

    // let endTimer = new Date().getTime();
    // let time = (endTimer - startTimer) / 1000;
    // console.log(time);

    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Find all client/patient that match the query
// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query.query;
//     let patientFilter = {};
//     let clientFilter = {};

//     const patientClinic =
//       req.query.clinic !== undefined
//         ? { "client.clinic": objectId(req.query.clinic) }
//         : {};

//     const clientClinic =
//       req.query.clinic !== undefined
//         ? { clinic: objectId(req.query.clinic) }
//         : {};

//     let startTimer = new Date().getTime();

//     // Check if the query is a valid id or not and setting filter queries accordingly
//     if (objectId.isValid(query)) {
//       patientFilter = {
//         $or: [{ _id: objectId(query) }, { "client._id": objectId(query) }],
//       };
//       clientFilter = { _id: objectId(query) };
//     } else {
//       patientFilter = {
//         $or: [
//           { patientName: { $regex: query, $options: "i" } },
//           { "client.phonetypes.pnumber": query },
//           { "client.address1": { $regex: query, $options: "i" } },
//           { "client.address2": { $regex: query, $options: "i" } },
//           { "client.email": query },
//           { "client.firstName": { $regex: query, $options: "i" } },
//           { "client.lastName": { $regex: query, $options: "i" } },
//         ],
//       };
//       clientFilter = {
//         $or: [
//           { "phonetypes.pnumber": query },
//           { address1: { $regex: query, $options: "i" } },
//           { address2: { $regex: query, $options: "i" } },
//           { email: query },
//           { firstName: { $regex: query, $options: "i" } },
//           { lastName: { $regex: query, $options: "i" } },
//         ],
//       };
//     }

//     // filtering by clinic
//     // if (clinic !== undefined) {
//     //   patientFilter = { $and: [patientFilter, { "client.clinic": clinic }] };
//     //   clientFilter = { $and: [clientFilter, { clinic: clinic }] };
//     // }

//     // console.log(patientFilter);
//     // console.log(clientFilter);

//     // Filtering documents from patient collection with match the query
//     const patientDoc = await Patientregistration.aggregate([
//       {
//         $lookup: {
//           from: "clientregistrations",
//           localField: "clientId",
//           foreignField: "_id",
//           as: "client",
//         },
//       },
//       { $unwind: "$client" },
//       {
//         $match: { $and: [patientFilter, patientClinic] },
//       },
//       {
//         $project: {
//           _id: 0,
//           client: {
//             id: "$clientId",
//             firstname: "$client.firstName",
//             lastname: "$client.lastName",
//             email: "$client.email",
//             phone: "$client.phonetypes.pnumber",
//             address: {
//               $concat: ["$client.address1", ", ", "$client.address2"],
//             },
//             clinic: "$client.clinicName",
//           },

//           patient: { id: "$_id", name: "$patientName" },
//         },
//       },
//     ]);
//     // console.log(patientDoc);

//     // filtering documents from client collection which match the query
//     const clientDoc = await Clientregistration.aggregate([
//       {
//         $match: { $and: [clientFilter, clientClinic] },
//       },
//       {
//         $project: {
//           _id: 0,
//           client: {
//             id: "$_id",
//             firstname: "$firstName",
//             lastname: "$lastName",
//             email: "$email",
//             phone: "$phonetypes.pnumber",
//             address: {
//               $concat: ["$address1", ", ", "$address2"],
//             },
//             clinic: "$clinicName",
//           },
//         },
//       },
//     ]);
//     // console.log(clientDoc.length);

//     // checking id the client ids already exist in patient docs and filtering clients with no patients
//     const filteredIds = [];
//     patientDoc.forEach((patient) => {
//       filteredIds.push(patient.client.id.toHexString());
//     });

//     // console.log(filteredIds);
//     const filteredDocs = clientDoc.filter(
//       (client) => filteredIds.includes(client.client.id.toHexString()) === false
//     );
//     // console.log(filteredDocs.length);

//     // combining patient docs and the filtered client docs
//     const docs = [...patientDoc, ...filteredDocs];
//     // console.log(docs.length);

//     let endTimer = new Date().getTime();
//     let time = (endTimer - startTimer) / 1000;
//     console.log(time);

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
// console.log(clientDoc.length);
// const clientIds = clientDoc.map((doc) => doc._id);
// console.log(clientIds);

// const patientDoc = await Patientregistration.find({
//   $or: [
//     { _id: query },
//     { patientName: { $regex: query, $options: "i" } },
//     // { clientId: { $in: clientIds } },
//   ],
// })
//   .populate("clientId")
//   .lean();

// console.log(patientDoc.length);

// // if (patientDoc.length === 0) {
// //   return res.status(200).json(clientDoc);
// // }
// // console.log("patientDoc2: " + patientDoc2.length);
// if (patientDoc.length > 1) {
//   let docs = [...patientDoc,...clientDoc];

// }else if (patientDoc.length === 1){
//     let docs = [patientDoc, ...clientDoc];
//   }
//   docs = docs.patientFilter(
//     (doc, index, self) =>
//       index ===
//       self.findIndex(
//         (test) => test._id.toHexString() === doc.client._id.toHexString()
//       )
//   )
//   return res.status(200).json(docs);
// }
// console.log(docs.length);
//////////////////////////////////////
//////////////////////////////////////

//
//
//
//
///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//

// // Find all client/patient that match the query
// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query.query;
//     console.log(query);

//     // const clientDoc = await Clientregistration.find({
//     //   $text: { $search: query },
//     // }).lean();

//     const clientDoc = await Clientregistration.aggregate([
//       {
//         $search: {
//           index: "searchClient",
//           text: { query: query, path: ["_id"] },
//         },
//       },
//       { $project: { _id: 1 } },
//     ]);

//     console.log(clientDoc.length);
//     const clientIds = clientDoc.map((doc) => doc._id);
//     console.log(clientIds);

//     const patientDoc2 = await Patientregistration.find({
//       clientId: { $in: clientIds },
//     })
//       .populate("clientId")
//       .lean();

//     if (patientDoc2.length === 0) {
//       return res.status(200).json(clientDoc);
//     }
//     console.log("patientDoc2: " + patientDoc2.length);

//     const patientDoc1 = await Patientregistration.find({
//       $text: { $search: query },
//     })
//       .populate("clientId")
//       .lean();

//     console.log("patientDoc1: " + patientDoc1.length);

//     var docs = patientDoc1.concat(patientDoc2);
//     docs = docs.patientFilter(
//       (doc, index, self) =>
//         index ===
//         self.findIndex(
//           (test) => test._id.toHexString() === doc._id.toHexString()
//         )
//     );
//     console.log(docs.length);

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const Patientregistration = require("../models/Patientregistration");
// const Clientregistration = require("../models/Clientregistration");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

// // Find all client/patient that match the query
// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query.query;
//     let patientFilter = {};
//     let clientFilter = {};

//     // const clinic = req.query.clinic;

//     let startTimer = new Date().getTime();

//     // Check if the query is a valid id or not and setting filter queries accordingly
//     if (objectId.isValid(query)) {
//       patientFilter = {
//         $or: [{ _id: objectId(query) }, { "client._id": objectId(query) }],
//       };

//       clientFilter = { _id: query };

//     } else {

//       patientFilter = {
//         $or: [
//           { patientName: { $regex: query, $options: "i" } },
//           { "client.phonetype.pnumber": query },
//           { "client.address1": { $regex: query, $options: "i" } },
//           { "client.address2": { $regex: query, $options: "i" } },
//           { "client.email": query },
//           { "client.firstName": { $regex: query, $options: "i" } },
//           { "client.lastName": { $regex: query, $options: "i" } },
//         ],
//       };

//       clientFilter = {
//         $or: [
//           { "phonetype.pnumber": query },
//           { address1: { $regex: query, $options: "i" } },
//           { address2: { $regex: query, $options: "i" } },
//           { email: query },
//           { firstName: { $regex: query, $options: "i" } },
//           { lastName: { $regex: query, $options: "i" } },
//         ],
//       };
//     }

//     // filtering by clinic
//     // if (clinic !== undefined) {
//     //   patientFilter = { $and: [patientFilter, { "client.clinic": clinic }] };
//     //   clientFilter = { $and: [clientFilter, { clinic: clinic }] };
//     // }

//     // Filtering documents from patient collection with match the query
//     const patientDoc = await Patientregistration.aggregate([
//       {
//         $lookup: {
//           from: "clientregistrations",
//           localField: "clientId",
//           foreignField: "_id",
//           as: "client",
//         },
//       },
//       { $unwind: "$client" },
//       {
//         $match: patientFilter,
//       },
//     ]);

//     // filtering documents from client collection which match the query
//     const clientDoc = await Clientregistration.find(clientFilter);

//     // checking id the client ids already exist in patient docs and filtering clients with no patients
//     const filteredIds = [];
//     patientDoc.forEach((patient) => {
//       filteredIds.push(patient.clientId.toHexString());
//     });

//     const filteredDocs = clientDoc.filter(
//       (client) => filteredIds.includes(client._id.toHexString()) === false
//     );

//     // combining patient docs and the filtered client docs
//     const docs = [...patientDoc, ...filteredDocs];

//     let endTimer = new Date().getTime();
//     let time = (endTimer - startTimer) / 1000;
//     console.log(time);

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// exports.findByQuery = async (req, res) => {
//   try {
//     const query = req.query.query;
//     let patientFilter = {};
//     let clientFilter = {};

//     const patientClinic =
//       req.query.clinic !== undefined
//         ? { "client.clinic": objectId(req.query.clinic) }
//         : {};

//     const clientClinic =
//       req.query.clinic !== undefined
//         ? { clinic: objectId(req.query.clinic) }
//         : {};

//     let startTimer = new Date().getTime();

//     // Check if the query is a valid id or not and setting filter queries accordingly
//     if (objectId.isValid(query)) {
//       patientFilter = {
//         $or: [{ _id: objectId(query) }, { "client._id": objectId(query) }],
//       };
//       clientFilter = { _id: objectId(query) };
//     } else {
//       patientFilter = {
//         $or: [
//           { patientName: { $regex: query, $options: "i" } },
//           { "client.phonetypes.pnumber": query },
//           { "client.address1": { $regex: query, $options: "i" } },
//           { "client.address2": { $regex: query, $options: "i" } },
//           { "client.email": query },
//           { "client.firstName": { $regex: query, $options: "i" } },
//           { "client.lastName": { $regex: query, $options: "i" } },
//         ],
//       };
//       clientFilter = {
//         $text: {$search: query}
//       };
//     }
//   }

// const clientDoc = await Clientregistration.aggregate([{
//   $match: { $and: [clientFilter, clientClinic] },
// },
// {
//   $project: {
//     _id: 0,
//     client: {
//       id: "$_id",
//       firstname: "$firstName",
//       lastname: "$lastName",
//       email: "$email",
//       phone: "$phonetypes.pnumber",
//       address: {
//         $concat: ["$address1", ", ", "$address2"],
//       },
//       clinic: "$clinicName",
//     },
//   },
// }]);
