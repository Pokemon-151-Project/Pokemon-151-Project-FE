import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("pokemon", require("./schemas/pokemon"));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("pokemon");
}
