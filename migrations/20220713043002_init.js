/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('lizards', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('variety')
    table.string('description')
    table.timestamps(false, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('lizards')
};
