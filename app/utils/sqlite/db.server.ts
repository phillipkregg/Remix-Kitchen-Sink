import { PrismaClient as SqlLite } from "prisma_clients/dbSqlite";

let dbSqlite: SqlLite;

declare global {
  var __dbSqlite: SqlLite | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  dbSqlite = new SqlLite();
} else {
  if (!global.__dbSqlite) {
    global.__dbSqlite = new SqlLite();
  }
  dbSqlite = global.__dbSqlite;
}

export { dbSqlite };
