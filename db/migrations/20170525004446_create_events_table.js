exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function (table) {
    table.increments();
    table.integer('owner_id');
    table.string('title');
    table.string('description');
    table.string('long_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
