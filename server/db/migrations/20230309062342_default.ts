import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Pokemon", require("./schemas/Pokemon"));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("Pokemon");
}
