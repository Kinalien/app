import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { customAlphabet } from "nanoid";
// import { acceptedLocaleLanguageTag } from "../i18n/shared";
import type { Branded } from "../types";

/**
 * User profile details and preferences.
 */
export const userTable = pgTable("user", {
	id: primaryId<"UserID">("u"),
	/** User's name, set by auth provider, or updated manually afterwards. */
	name: varchar({ length: 100 }).notNull(),
	/** User's picture, only for personalization purposes. */
	avatarUrl: varchar({ length: 200 }),
	/** Full ISO code, language and region. Inferred from browser on creation, can be changed later. */
	// locale: text("locale", { mode: "text", enum: acceptedLocaleLanguageTag }).notNull(),
	// timeZoneId: text("time_zone_id", { length: 100 }).notNull(),
	/** Used for weights formatting, etc. Stored separately in case user wants to change it. */
	// measurementSystem: text("measurement_system", {
	// 	mode: "text",
	// 	enum: ["imperial", "metrical"] as const,
	// }).notNull(),
	createdAt: timestamp().defaultNow().notNull(),
});
export type DatabaseUser = typeof userTable.$inferSelect;

/**
 * Stores all user sessions to verify validity of requests.
 */
export const sessionTable = pgTable("user_session", {
	/** User can have multiple sessions across devices */
	id: varchar({ length: 32 }).notNull().unique().primaryKey(),
	userId: varchar()
		.notNull()
		.references(() => userTable.id)
		.$type<DatabaseUser["id"]>(),
	/**
	 * UNIX milliseconds timestamp.
	 */
	expiresAt: timestamp("expires_at").notNull(),
});
export type DatabaseSession = typeof sessionTable.$inferSelect;

/**
 * Stores date in a ZonedDateTimeISO format.
 * If you need ZonedDateTime, it should be sent from the client.
 * @example '2024-03-07T03:24:30.000003500+05:30[Europe/Madrid]'
 * @link https://tc39.es/proposal-temporal/docs/zoneddatetime.html
 */
// function zonedDateTimeISO(columnName: Parameters<typeof text>[0]) {
// 	return dateTime(columnName).notNull();
// }

const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 12);
function primaryId<U extends string>(prefix?: string) {
	return varchar({ length: 12 + (prefix ? prefix.length + 1 : 0) })
		.notNull()
		.primaryKey()
		.unique()
		.$default(() => (prefix ? `${prefix}_${nanoid()}` : nanoid()))
		.$type<Branded<string, U>>();
}
