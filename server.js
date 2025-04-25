
/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secure: Connection String ***/
const dotenv = require("dotenv");
dotenv.config();

/*** Set-Up: Express Server ***/
const express = require("express");
const app = express();
const PORT = 3000;

/*** Set-Up: Middleware ***/
app.use(express.urlencoded());
app.use(express.json());

/*** Set-Up: Datatases: MongoDB & Mongoose ***/
const mongoDB = require("mongodb");
const mongoose = require("mongoose");

/*** Database Models & Connections ***/
const Fruit = require('./models/Fruit.js');

app.listen(PORT, () => {
  console.log(`Server is listening on Port: André${PORT}`)
});