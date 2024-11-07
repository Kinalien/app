import type { DatabaseUser } from "~/server/db/schema";

export type UserID = DatabaseUser["id"];

// export type UserMeasurementSystem = DatabaseUser["measurementSystem"];

declare const __brand: unique symbol;
export type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

export type { UserSession } from "~/server/auth/user-session";
export type { DatabaseSession } from "~/server/db/schema";
