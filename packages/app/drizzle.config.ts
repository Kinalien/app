import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./.drizzle",
  dialect: "postgresql",
  driver: "pglite",

  dbCredentials: {
    url: ".drizzle/pglite_data/",
  },
  verbose: process.env.NODE_ENV !== "production",
  strict: true,
});
