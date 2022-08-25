const { plnitm_services, plncost_services } = require("../../services");

// Create and Save a Planitem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await plnitm_services.create(body);

    // Create plancost for the current planitem
    const planCostBody = {
      planitemid: data._id,
      clinic: data.clinic,
      calc_format: data.pricingStrategyId,
    };
    const planCostData = await plncost_services.createPlanCost(planCostBody);

    res.status(201).json({ planitem: data, plancost: planCostData });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Planitem
exports.findAll = async (req, res) => {
  try {
    const data = await plnitm_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single planitem and plancost with planitemid and clinicid
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const clinicid = req.params.clinicid;
    const data = await plncost_services.findOne(id, clinicid);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve planitem from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const clinicid = req.params.clinicid;
    const { page = 1, limit = 10 } = req.query;
    const data = await plncost_services.findByName(name, clinicid, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Filter planitems by plan category, plan sub-category, species and clinicid
// Pass planCategory_id, planSubCategory_id, species_id and clinicid as query fields
exports.findByQuery = async (req, res) => {
  try {
    const { page = 1, limit = 10, ...body } = req.query;
    const data = await plncost_services.findByQuery(body, limit, page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find planitems with planaction
exports.findByPlanaction = async (req, res) => {
  try {
    const planaction = req.params.planaction;
    const clinicid = req.params.clinicid;
    const { page = 1, limit = 10 } = req.query;
    const data = await plncost_services.findByPlanaction(
      planaction,
      clinicid,
      limit,
      page
    );
    res.status(200).json({ results: data.length, data: data });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find plancost by planitem
exports.findPlanCostByPlanItem = async (req, res) => {
  try {
    const planItemId = req.params.planitem;
    const data = await plncost_services.findPlanCostByPlanItem(planItemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Planitem
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await plnitm_services.update(id, body);

    //Update clinic status in plan cost of current planitem
    const planCostData = await plncost_services.updatePlanCost(
      data._id,
      data.clinic
    );
    res.status(200).json({ planitem: data, plancost: planCostData.docs });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update plancost
exports.updatePlanCost = async (req, res) => {
  try {
    const planitem = req.params.planitem;
    const body = req.body;
    const data = await plncost_services.updatePlanCost(planitem, body);

    // Update plan item clincs according to plancost update
    const planItemData = await plnitm_services.update(planitem, {
      clinic: data.clinics,
    });
    res.status(200).json({ planitem: planItemData, plancost: data.docs });
  } catch (error) {
    res.status(500).json(error);
  }
};
