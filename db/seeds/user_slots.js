exports.seed = function(knex, Promise) {
  return knex('user_slots').del()
    .then(function () {
      return Promise.all([
        knex('user_slots').insert({id: 1, users_id: 1, slots_id: 1}),
        knex('user_slots').insert({id: 2, users_id: 2, slots_id: 2}),
        knex('user_slots').insert({id: 3, users_id: 2, slots_id: 3}),
        knex('user_slots').insert({id: 4, users_id: 3, slots_id: 2}),
        knex('user_slots').insert({id: 5, users_id: 3, slots_id: 3})
      ]);
    });
};
