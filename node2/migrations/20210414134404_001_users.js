exports.up = function(knex, Promise) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('users', function(t) {
            t.increments('id').primary();
            t.string('first_name', 100);
            t.string('last_name', 100);
            t.text('bio');
          });
        }
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('users');
        }
      });
  };