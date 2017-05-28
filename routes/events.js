"use strict";

const express = require('express');
const router  = express.Router();
const urlGenerator = require("../public/scripts/random_string_generator");
const organize_data = require("../public/scripts/organize_data");

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.render("main_page")
  });

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
      res.render("long_url", organize_data(eventData, slotData, userData));
    });
  });

  //Event Creation !GOOD!
  router.post("/", (req, res) => {
    const longUrl = urlGenerator(10);
    knex('events')
      .insert({title: req.body.title,
               description: req.body.description,
               long_url: longUrl})
      .returning('id')
      .then((result) => {
        let promise2 = knex('slots')
                       .insert(req.body.slots.map((slot) => ({
                            start_time: slot.start_time,
                            end_time: slot.end_time,
                            date: slot.date,
                            events_id: result[0]
                        })));
        let promise3 = knex('users')
                       .insert({
                         name: req.body.name,
                         owner: true,
                         email: req.body.email,
                         events_id: result[0]
                       });
        Promise.all([promise2, promise3])
          .then(function(){});
      });
      res.redirect("/events/" + longUrl);
  });

  // Add User !GOOD!
  router.post("/:long_url/users", (req, res) => {
     knex('events')
       .select('id')
       .where('long_url', req.params.long_url)
       .then((result) => {
              knex('users')
               .insert({
                 name: req.body.name,
                 events_id: result[0].id,
                 owner: false})
               .then(function(){})
             });
       res.redirect("/events/" + req.params.long_url);
  });

  // Delete User !GOOD!
  router.post("/:long_url/users/:user_id/delete", (req, res) => {
    const userId = req.params.user_id;
    const longUrl = req.params.long_url;
    let promise1 = knex("users")
                    .where({'id': userId})
                    .del()
    let promise2 = knex("user_slots")
                    .where('users_id', userId)
                    .del()
    knex('events')
      .select()
      .leftJoin('users', 'events.id', 'events_id')
      .where({'long_url': longUrl, 'users.id': userId}).limit(1).then(rows => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.reject({
            message: "User-Event Combination doesn't exist"
          });
        }
      }).then(validCombination => {return Promise.all([promise1, promise2])
                                          .then(function(){})});
        res.redirect("/events/" + req.params.long_url);
  });

  //Update Event Data ** TRANSACTING
  router.post("/:long_url/users/:user_id", (req, res) => {
    const userId = req.params.user_id;
    const longUrl = req.params.long_url;
    console.log(typeof req.body.slots);
    let promise1 = knex("users")
                    .where({'id': userId})
                    .update({name: req.body.name})
    let promise2 = knex("user_slots")
                    .where('users_id', userId)
                    .update({users_id: 0})
    let promise3 = knex('user_slots')
                     .insert(req.body.slots.map((slot) => ({
                             slots_id: slot,
                             users_id: userId
                     })))
    knex('events')
      .select()
      .leftJoin('users', 'events.id', 'events_id')
      .where({'long_url': longUrl, 'users.id': userId}).limit(1).then(rows => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.reject({
            message: "User-Event Combination doesn't exist"
          });
        }
      }).then(validCombination => {return Promise.all([promise1, promise2, promise3])
                                          .then(function(){})});
      res.redirect("/events/" + longUrl);
  });
  return router;
}









