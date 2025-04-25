/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 319.5 **********/
/******************************/

/******************************/
/****** WORKING WITH  ********/
/******** MONGOOSE *********/
/******** 25-APR-2025 *********/

/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secure: Connection String ***/
const dotenv = require("dotenv");
dotenv.config();

/*** Require: Express Server ***/
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/*** Require: Middleware ***/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*** Require: MongoDB & Mongoose Datatases ***/
const mongoDB = require("mongodb");
const mongoose = require("mongoose");

/*** Require: Database Models ***/
const Veggie = require('./models/Veggie.js');
const Veggies = require('./routes/Veggies.js');

/*** Require: Database Connection ***/
// mongoose.connect(process.env.ATLAS_URI)
// mongoose.connection.once('open', () => {
//   console.log('connected to mongoDB')
// });

/*** Mock Data for Testing ***/
// const Veggies = ["broccoli", "cabbage", "kale"]

/*** Establish Endpoint Routes ***/

/************** INDUCES **************/
/*** Index: Get ***/
app.get('/', (req, res) => {
  res.send(`Welcome to the Veggie API!
    Go ahead and introduce yourself to a veggie today`)
})

/*** Index: Get ***/
app.get('/veggies/seed', async (req, res) => {
  try {
    await Veggie.create([
      {
        name: 'grapefruit',
        color: 'pink',
        readyToEat: true
      },
      {
        name: 'grape',
        color: 'purple',
        readyToEat: false
      },
      {
        name: 'avocado',
        color: 'green',
        readyToEat: true
      }
    ])
    res.redirect('/fruits')
  } catch (error) {
    console.error(error)
  }
})
// From our Fruit Routes
app.use('/fruits', Fruits)


// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


app.listen(PORT, () => {
  console.log(`Server is listening on Port: André${PORT}`)
});