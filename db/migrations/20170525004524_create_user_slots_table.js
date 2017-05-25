exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_slots', function (table) {
    table.increments();
    table.integer('slots_id');
    table.integer('users_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('slots');
};
