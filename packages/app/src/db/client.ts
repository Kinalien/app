import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";

const PGLITE_DATA_DIR = ".drizzle/pglite_data";
const client = new PGlite(PGLITE_DATA_DIR);

export const db = drizzle({ client });
