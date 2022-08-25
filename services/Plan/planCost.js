const PlanCost = require("../../models/PlanCost");
const objectId = require("mongoose").Types.ObjectId;

// Create a new PlanCost
exports.createPlanCost = async (body) => {
  try {
    const docs = [];
    for (let clinic of body.clinic) {
      docs.push(
        PlanCost.create({
          planitemid: body.planitemid,
          clinicid: clinic.clinicid,
          active: clinic.active,
          calc_format: body.calc_format,
        })
      );
    }
    const res = await Promise.all(docs);
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find PlanCost by planitem
exports.findPlanCostByPlanItem = async (planitem) => {
  try {
    const docs = await PlanCost.find({ planitemid: planitem }).lean();
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find a single planitem and costing with an planitemid and clinicid
exports.findOne = async (id, clinicid) => {
  try {
    const doc = await PlanCost.find({
      planitemid: id,
      clinicid: clinicid,
    })
      .populate("planitemid")
      .lean();
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Retrieve planitem from the database by name.
exports.findByName = async (name, clinicid, limit, page) => {
  try {
    const title = name === undefined ? "" : name;
    const doc = await PlanCost.aggregate([
      {
        $lookup: {
          from: "planitems",
          localField: "planitemid",
          foreignField: "_id",
          as: "planiteminfo",
        },
      },
      {
        $match: {
          "planiteminfo.title": { $regex: title, $options: "i" },
          clinicid: objectId(clinicid),
        },
      },
      { $skip: (page - 1) * limit },
      { $limit: limit * 1 },
    ]);
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Filter planitems by plan category, plan sub-category and species
exports.findByQuery = async (body, limit, page) => {
  try {
    const query = {};
    if (body.plancategory !== undefined) {
      query["planiteminfo.planCategory_id"] = objectId(body.plancategory);
    }
    if (body.plansubcategory !== undefined) {
      query["planiteminfo.planSubCategory_id"] = objectId(body.plansubcategory);
    }
    if (body.species !== undefined) {
      query["planiteminfo.species_id"] = objectId(body.species);
    }

    query["clinicid"] = objectId(body.clinicid);

    const doc = await PlanCost.aggregate([
      {
        $lookup: {
          from: "planitems",
          localField: "planitemid",
          foreignField: "_id",
          as: "planiteminfo",
        },
      },
      { $match: query },
      { $skip: (page - 1) * limit },
      { $limit: limit * 1 },
    ]);
    return doc;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Find planitems with planaction
exports.findByPlanaction = async (planactionid, clinicid, limit, page) => {
  try {
    const id = objectId(planactionid);
    const docs = await PlanCost.aggregate([
      {
        $lookup: {
          from: "planitems",
          localField: "planitemid",
          foreignField: "_id",
          as: "planiteminfo",
        },
      },
      {
        $lookup: {
          from: "plan_cats",
          localField: "planiteminfo.planCategory_id",
          foreignField: "_id",
          as: "plancategory",
        },
      },
      {
        $lookup: {
          from: "plan_subcats",
          localField: "planiteminfo.planSubCategory_id",
          foreignField: "_id",
          as: "plansubcategory",
        },
      },
      {
        $match: {
          $and: [
            {
              $or: [
                { "plancategory.planaction_id": id },
                { "plansubcategory.planaction_id": id },
              ],
            },
            { clinicid: objectId(clinicid) },
          ],
        },
      },
      { $skip: (page - 1) * limit },
      { $limit: limit * 1 },
    ]);
    return docs;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Update PlanCost
exports.updatePlanCost = async (planItemId, body) => {
  try {
    const planCostArr = [];
    const clinics = [];
    for (let result of body) {
      clinics.push({ clinicid: result.clinicid, active: result.active });
      planCostArr.push({
        updateOne: {
          filter: { planitemid: planItemId, clinicid: result.clinicid },
          update: { $set: result },
        },
      });
    }
    const docs = await PlanCost.bulkWrite(planCostArr);

    return { docs: docs, clinics: clinics };
  } catch (error) {
    return Promise.reject(error);
  }
};

// // Calculate PlanCost
// exports.calculateCost = (body) => {
//   try {
//     body.uprice =
//       body.calc_format == 14
//         ? body.cliniccost + (body.markupcost * body.cliniccost) / 100
//         : body.cliniccost;

//     body.extension =
//       body.format == 1
//         ? body.uprice * body.quantity + body.servicetax
//         : body.uprice * (body.quantity + body.servicetax);

//     body.total = body.extension + body.tax;
//     return body;
//   } catch (error) {
//     console.log(error);
//   }
// };
