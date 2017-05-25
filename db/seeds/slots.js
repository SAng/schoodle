exports.seed = function(knex, Promise) {
  return knex('slots').del()
    .then(function () {
      return Promise.all([
        knex('slots').insert({id: 1, events_id: 1, date: 'Jan-01-1999', start_time: '04:05 AM', end_time: '04:09 AM'}),
        knex('slots').insert({id: 2, events_id: 2, date: 'Jan-02-1999', start_time: '04:05 AM', end_time: '04:09 AM'})
      ]);
    });
};
