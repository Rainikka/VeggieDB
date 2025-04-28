/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 319.5 **********/
/******************************/

/******************************/
/******* WORKING WITH *********/
/********** MONGOOSE **********/
/******** 25-APR-2025 *********/

/******** Knowledge Inspiration 1 ********
 * 
 * Media Outlet :: YouTube
 * Title :: Learn MongoDBb
 * Title :: Learn Mongoose
 * Creator/Author :: WebDevSimplified
 * 
******** Knowledge Inspiration 2 ********
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: How to Build a RESTful API
 *  Creator / Author :: Nishant Kumar
 *  
 *****************************************/

/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secure: Connection String ***/
const dotenv = require("dotenv");
dotenv.config();

/*** Require: Express Server ***/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

/*** Require: Middleware ***/
const urlencode = require("express");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*** Require: MongoDB & Mongoose Databases ***/
const mongoDB = require("mongodb");
const mongoose = require("mongoose");

/*** Require: Database Models ***/
const Fruit = require('./models/Fruit.js');
const Fruits = require('./routes/Fruits.js');

const Veggie = require('./models/Veggie.js');
const Veggies = require('./routes/Veggies.js');


/*** Require: Database Connection ***/
mongoose.connect(process.env.DATABASE_URI)
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB')
});

/***** Establish Endpoint Routes ******/
/*************** INDUCES **************/
/*** Index: Get ***/
app.get('/', (req, res) => {
  res.send(`Welcome to the Fruit & Veggie API!
    Go ahead and re-introduce yourself to a produce--put a fresh fruit or vegetable  on your plate today!`)
})

/*** Seed Data Function :: Fruit ***/
app.get('/frutis/seed', async (req, res) => {
  try {
    await Fruit.create([
      {
        name: 'banana',
        color: 'yellow',
        readyToEat: true
      },
      {
        name: 'apple',
        color: 'spotted',
        readyToEat: false
      },
      {
        name: 'canteloupe',
        color: 'orange',
        readyToEat: true
      }
    ])
    res.redirect('/fruits')
  } catch (error) {
    console.error(error)
    res.status(500).send("Error seeding data")
  }
});

/*** Seed Data Function :: Veggie ***/
app.get('/veggies/seed', async (req, res) => {
  try {
    await Veggie.create([
      {
        name: 'corn',
        color: 'yellow',
        readyToEat: true
      },
      {
        name: 'eggplant',
        color: 'spotted',
        readyToEat: false
      },
      {
        name: 'carrots',
        color: 'orange',
        readyToEat: true
      }
    ])
    res.redirect('/veggies')
  } catch (error) {
    console.error(error)
    res.status(500).send("Error seeding data")
  }
});

/*** Uae Routes: Where to Find Endpoint Data */
app.use('/fruits', Fruits);
app.use('/veggies', Veggies);


/*** Error Handling ***/
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

/** Server Listening ***/
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`)
});