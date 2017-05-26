exports.up = function(knex, Promise) {
    return knex.schema.table('events', function (table) {
    table.dropColumn('owner_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function (table) {
    table.integer('owner_id');
  });
};
