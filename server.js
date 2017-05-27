"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Home page
app.get("/events", (req, res) => {
  res.render("create_events");
});

// Event Creation (1 of 2)
// 2 app posts. one to create event and add time slots so we don't need if/else statements to sort through data
app.post("/create-event", (req, res) => {
  console.log(req.body);

  const userData = {
    name: req.body.name
  };

  let userId = "";
  let userFound = false;

  console.log("Searching database to see if user already exists...");
    // get list of users (knex docs for "knex select all rows from a table")
  knex.select("*").from("users").then(function(response) {

    //console.log("OBJ: " + obj);
    //console.log("BUILDER: " + builder);

    // check if the user already exists (check if req.body.name is in list)
    response.forEach(function(userObj) {
      if (req.body.name === userObj.name) {
        // if it does, save its id (from the list of users you got from the db)
        userId = userObj.id;
        userFound = true;
        console.log("This user exists already");
      }
    });

    // IF it doesn't, insert it (use this function), and save its id
    if (!userFound) {
      knex.insert(userData).into("users").then(function (id) {
        userId = id;
        console.log("We found a match! " + id);
      })
    }

    const eventData = {
      title: req.body.title,
      description : req.body.description,
      owner_id: userId
    };

    console.log(eventData);
    // write event, with the user's id
    knex.insert(eventData).into("events").then(function (id) {
      res.render(id);
    });
  });
});


// Event Creation (2 of 2). This will add time slots to database.
app.post("/add-time-slots", (req, res) => {
  console.log(req.body);

});

// Show Event
app.get("/events/:long_url", (req, res) => {
  let templateVars = extractEventData(knex, req.params.id);
  res.render("event_page", templateVars)
});

// Add User
app.post("/events/:long_url/users", (req, res) => {

});

// Delete User
app.post("events/:long_url/users/:userid/delete", (req, res) => {

});

//Update User
app.post("events/:long_url/users/:userid", (req, res) => {

});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});