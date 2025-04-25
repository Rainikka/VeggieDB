/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.5 **********/
/******************************/

/*******************************/
/******* Express Server ********/
/******** Application **********/
/******** 23-APR-2025 **********/


/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Set-Up Express Server ***/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const Fruit = require('./models/Fruit.js');
const Fruits = require('./routes/Fruits.js');

// Fruit Model (simple version)
const Fruit = mongoose.model('Fruit', {
  name: String,
  color: String,
  readyToEat: Boolean
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/fruits', Fruits);

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
  res.send('Welcome to the Fruits API!')
})

/*** Routes ***/
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
});

app.post('/fruits/', (req, res) => {
  res.send('received');
});

app.use(express.urlencoded({ extended: true }));

app.post('/fruits/', (req, res) => {
  res.send(req.body);
});

app.post('/fruits/', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits')
});


app.listen(3000, () => {
  console.log(`Server is listening on ${PORT}`)
});