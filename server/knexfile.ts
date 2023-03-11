// not sure I did this right
const PASSWORD = process.env.PASSWORD;

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME || "pokemon-151-db",
      user: process.env.POSTGRES_USER || "postgres",
      password:
        // not sure I did this password right
        process.env.POSTGRES_USER_PW || PASSWORD,
      port: process.env.POSTGRES_PORT || 5432,
      host: process.env.POSTGRES_HOST || "localhost",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
