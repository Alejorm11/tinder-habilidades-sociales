// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port:'5432',
      database: 'Tinder',
      user:     'postgres',
      password: 'Nico1102'
    },
    useNullAsDefault:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port:'5432',
      database: 'Tinder',
      user:     'postgres',
      password: 'Nico1102'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port:'5432',
      database: 'Tinder',
      user:     'postgres',
      password: 'Nico1102'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
