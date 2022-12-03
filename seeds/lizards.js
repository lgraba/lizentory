/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  lizardCount = await knex('lizards').select().count()

  if (lizardCount == 0) {
    await knex('lizards').insert([
      {name: 'Bill', variety: 'Thorny Dragon (Moloch horridus)', description: "Also known as the mountain devil or the thorny devil, the thorny dragon is a fairly large lizard that''s found throughout central and western Australia. It''s known for its characteristic spiky scales and scary name.", user_id: 1},
      {name: 'Vargus', variety: 'Komodo Dragon (Varanus komodoensis)', description: "these massive lizards, which can weigh up to 70 kg and reach a length of up to 3.1 m, are one of the few lizards in the world that have a venomous bite. They can also run pretty fast, reaching speeds of up to 20 km/h.", user_id: 1},
      {name: 'Mishu', variety: "Jackson’s Chameleon (Trioceros jacksonii)", description: "One of the most recognizable chameleons in the world, the Jackson’s chameleon is native to the forests of East Africa, but it has since been introduced to California, Hawaii, and Florida.", user_id: 1},
    ]);
  }
};