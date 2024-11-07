import { isServer } from "solid-js/web";
import { boolean, minLength, object, optional, parse, picklist, pipe, string } from "valibot";

if (!isServer) throw Error("This module cannot be imported from client module");

const schema = object({
	// Vite defaults
	BASE_URL: optional(string()),
	MODE: optional(picklist(["production", "development"])),
	DEV: optional(boolean()),
	PROD: optional(boolean()),
	SSR: optional(boolean()),
	// DB connection string
	DATABASE_URL: pipe(string(), minLength(1)),
	// Session encryption secret
	SESSION_SECRET: pipe(string(), minLength(12)),
});

export const env = parse(schema, {
	...import.meta.env,
	DATABASE_URL: process.env.DATABASE_URL,
	SESSION_SECRET: process.env.SESSION_SECRET,
});
