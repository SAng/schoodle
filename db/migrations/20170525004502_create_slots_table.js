exports.up = function(knex, Promise) {
  return knex.schema.createTable('slots', function (table) {
    table.increments();
    table.integer('events_id');
    table.date('date');
    table.time('start_time');
    table.time('end_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('slots');
};
