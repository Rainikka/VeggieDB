const express = require('express');
const router = express.Router();
const veggie = require('../models/veggie');

// Index - GET all veggies
router.get('/', async (req, res) => {
  try {
    const veggies = await veggie.find();
    res.json(veggies);
  } catch (err) {
    console.log(err);
  }
});

// New - handled by front end

// Delete - DELETE one veggie
router.delete('/:id', async (req, res) => {
  try {
    await veggie.findByIdAndDelete(req.params.id);
    res.redirect('/veggiess');
  } catch (error) {
    console.error(error);
  }
});

// Update - PUT update veggie
router.put("/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    await veggie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/veggies");
  } catch (error) {
    console.log(error);
  }
});

// Create - POST new veggie
router.post('/', async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    await veggie.create(req.body);
    res.redirect("/veggies");
  } catch (error) {
    console.log(error);
  }
});

// Edit - handled by front end

// Show - GET one veggie
router.get('/:id', async (req, res) => {
  try {
    const veggie = await veggie.findById(req.params.id);
    res.json(veggie);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;