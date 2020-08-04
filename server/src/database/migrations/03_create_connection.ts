import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.time('created_at')
        .defaultTo('CURRENT_TIMESTAMP')
        .notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}