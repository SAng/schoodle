exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({id: 1, title: 'Fun Event', description: "abc", long_url: "abckjsdlf"}),
        knex('events').insert({id: 2, title: 'Fun Event2', description: "abc2", long_url: "abckjsdlfds2"})
      ]);
    });
};
