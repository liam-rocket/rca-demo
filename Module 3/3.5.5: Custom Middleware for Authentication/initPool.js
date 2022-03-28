import pg from "pg";

const { Pool } = pg;
const pgConnectionConfigs = {
  user: "yickkiuliamleung",
  host: "localhost",
  database: "user_auth",
  port: 5432,
};

const pool = new Pool(pgConnectionConfigs);

export default pool;
