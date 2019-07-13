const knex = require('knex')(require('../knexfile'));


const globalSetup = async () => {
  await knex.migrate.latest();
  await knex('user').del();
};

module.exports = globalSetup;
