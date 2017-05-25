exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', email: 'sdfs@gmail.com', owner: true, events_id: 1}),
        knex('users').insert({id: 2, name: 'Alice2', email: '2sdfs@gmail.com', owner: true, events_id: 2})
      ]);
    });
};
