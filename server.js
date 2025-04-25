/*** Secured Connection String ***/
const dotenv = require("dotenv");
dotenv.config();

/*** Set-Up Expres Server ***/
const express = require("express");
const app = express();
const PORT = 3000;


const mongoose = require("mongoose")

app.listen(PORT, () => {
  console.log(`Server is listening on Port: André${PORT}`)
});