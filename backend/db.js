import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// Sets up a pool that allows for database querying 
const pool = new Pool(
  {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
);

export default pool;