"use strict";

const express = require('express');
const router  = express.Router();
const organize_data = require("../public/scripts/organize_data");

module.exports = (knex) => {
  router.get("/:long_url", (req, res) => {
    const param = req.params.long_url;
    let promise1 = knex
                    .select("title", "description")
                    .where({long_url: param})
                    .from("events");
    let promise2 = knex
                    .select("slots.id as id", "date", "start_time", "end_time", "users.id as user_id")
                    .from("slots")
                    .leftJoin("events", "events.id", "events_id")
                    .leftJoin("user_slots", "slots_id", "slots.id")
                    .leftJoin("users", "users.id", "users_id")
                    .where({long_url: param});
    let promise3 = knex
                    .select("name", "email", "owner", "users.id")
                    .from("users")
                    .leftJoin("events", "events.id", "events_id")
                    .where({long_url: param});



    Promise.all([promise1, promise2, promise3])
    .then( ([eventData, slotData, userData]) => {
      res.json(organize_data(eventData, slotData, userData));
    });
  });
  return router;
}



// title and description
// .select("title", "description")
// .where({long_url: param})
// .from("events")

//all users of event
      // .select("name", "email", "owner", users.id)
      // .from("users")
      // .leftJoin("events", "events.id", "events_id")
      // .where({long_url: param})

      // .select("date", "start_time", "end_time", "users.id")
      // .from("slots")
      // .leftJoin("events", "events.id", "events_id")
      // .leftJoin("user_slots", "slots_id", "slots.id")
      // .leftJoin("users", "users.id", "users_id")
      // .where({long_url: param})
