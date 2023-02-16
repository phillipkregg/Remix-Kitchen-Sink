//import { PrismaClient as PrismaClient2 } from "@prisma/client";
import { PrismaClient as MySql } from "prisma_clients/dbMysql";

let dbMySql: MySql;

declare global {
  var __dbMySql: MySql | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  dbMySql = new MySql();
} else {
  if (!global.__dbMySql) {
    global.__dbMySql = new MySql();
  }
  dbMySql = global.__dbMySql;
}

export { dbMySql };
