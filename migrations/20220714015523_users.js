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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};

