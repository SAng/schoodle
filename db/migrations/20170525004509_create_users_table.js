exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.integer('events_id');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('events_id');
    table.dropColumn('email');
  });
};
