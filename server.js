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

const events_apiRoutes = require("./routes/events_api");
const eventsRoutes = require("./routes/events")

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes

app.use("/api/events", events_apiRoutes(knex));
app.use("/events", eventsRoutes(knex));
app.get("/", (req, res) => {
    res.render("index")
  });

// Home page
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get('/long_url', (req, res) => {
  var data = {
    title: 'an event',
    description: 'This is an event',
    slots: [
      { date: '1991-01-02', start_time: '04:05 PM', end_time: '04:09 PM',
        users: [2, 3],
        id: 2
      },
      { date: '1999-01-02', start_time:'05:00 AM', end_time:'06:09 AM',
       users: [2,3],
       id: 3},
    ],
    users: {2: {name: 'Alice2', email: '2sdfs@gmail.com', owner: true, id: 2},
            3: {name: 'Alice3', email: '2sdfs@gmail.com', owner: false, id:3}
           }
  }
  res.render('long_url', data);
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
