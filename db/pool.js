const { Pool } = require("pg");
require("dotenv").config();

const connectionString = process.argv[2] || process.env.DATABASE_URL_LOCAL;

module.exports = new Pool({ connectionString });
