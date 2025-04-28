const express = require('express');
const router = express.Router();
const Veggie = require('../models/Veggie');

router.get('/', async (req, res) => {
  try {
    const veggies = await Veggie.find();
    res.json(veggies);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const foundVeggie = await Veggie.findById(req.params.id);
    res.json(foundVeggie);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  const veggie = new Veggie({
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat
  });

  const newVeggie = await veggie.save();
  res.status(201).json(newVeggie);
});

module.exports = router;