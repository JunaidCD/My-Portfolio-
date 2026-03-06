import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use SQLite for development if DATABASE_URL is not set
const useSqlite = !process.env.DATABASE_URL;

let db: any;
let pool: any;

async function initDb() {
  if (useSqlite) {
    // Use sql.js for SQLite (works with ES modules)
    const initSqlJs = (await import("sql.js")).default;
    const SQL = await initSqlJs();
    const database = new SQL.Database();
    
    // Create messages table for SQLite
    database.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    pool = database;
    // For SQLite, we need to create a simple db object for drizzle
    db = {
      insert: async (table: any, data: any) => {
        const columns = Object.keys(data).join(", ");
        const placeholders = Object.keys(data).map(() => "?").join(", ");
        const values = Object.values(data);
        database.run(
          `INSERT INTO ${table._.name} (${columns}) VALUES (${placeholders})`,
          values
        );
        return { ...data, id: database.exec("SELECT last_insert_rowid()")[0]?.values[0]?.[0] };
      },
      select: async (table: any) => {
        const result = database.exec(`SELECT * FROM ${table._.name}`);
        if (!result.length) return [];
        const columns = result[0].columns;
        return result[0].values.map((row: any[]) => {
          const obj: any = {};
          columns.forEach((col, i) => obj[col] = row[i]);
          return obj;
        });
      }
    };
  } else {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?",
      );
    }
    
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle(pool, { schema });
  }
}

initDb();

export { pool, db };
