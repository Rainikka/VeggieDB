const express = require('express');
const router = express.Router();
const Fruit = require('../models/Veggie');

// Index Route
router.get('/', async (req, res) => {
  try {
    const fruits = await Fruit.find({});
    res.json(fruits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Route
router.post('/', async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === 'on';

  try {
    const newFruit = await Fruit.create(req.body);
    res.redirect('/fruits');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;