exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.boolean('owner');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function (table) {
    table.dropColumn('owner');
  });
};
