const { paygrp_services } = require("../../services");

// Create and Save a Payment group
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const data = await paygrp_services.create(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Payment group from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await paygrp_services.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve payment group from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await paygrp_services.findByName(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
