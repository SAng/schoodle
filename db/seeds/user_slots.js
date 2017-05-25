exports.seed = function(knex, Promise) {
  return knex('user_slots').del()
    .then(function () {
      return Promise.all([
        knex('user_slots').insert({id: 1, users_id: 1, slots_id: 1}),
        knex('user_slots').insert({id: 2, users_id: 2, slots_id: 2})
      ]);
    });
};
