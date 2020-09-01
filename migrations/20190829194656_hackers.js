
exports.up = function(knex) {
 return knex.schema.createTable('hackers', tbl => {
    tbl.increments('id');
    tbl.string('name', 128)
        .notNullable();
    tbl.string('username', 128)
        .notNullable()
        .unique();
    tbl.string('password')
        .notNullable();
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('hackers');
};
