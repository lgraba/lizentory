/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Add user_id (FK) to lizards table
  return knex.schema.alterTable('lizards', (table) => {
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('id').inTable('users')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('lizards', (table) => {
    table.dropForeign('user_id')
    table.dropColumn('user_id')
  })
};
