/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 319.5 **********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 17-APR-2025 *********/

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




app.listen(PORT, () => {
  console.log(`Server is listening on Port: André${PORT}`)
});