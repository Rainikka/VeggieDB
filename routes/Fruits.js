const express = require('express');
const router = express.Router();
const Fruit = require('../models/Fruit');

router.get('/', async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.json(fruits);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.json(foundFruit);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// Create Route
router.post('/', async (req, res) => {
  const fruit = new Veggie({
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat
  });

  const newFruit = await fruit.save();
  res.status(201).json(newFruit);
});

module.exports = router;