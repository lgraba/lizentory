/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  // Create users table
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('okta_id')
    table.string('email')
    table.string('description')
    table.timestamps(false, true)
  })

  // // Add user_id (FK) to lizards table
  // return knex.schema.alterTable('lizards', (table) => {
  //   table.integer('user_id').unsigned()
  //   table.foreign('user_id').references('id').inTable('users')
  // }).withSchema('users')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // knex.schema.alterTable('lizards', (table) => {
  //   table.dropForeign('user_id')
  //   table.dropColumn('user_id')
  // })

  return knex.schema.dropTable('users')
};

