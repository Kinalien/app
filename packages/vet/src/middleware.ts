import { createMiddleware } from "@solidjs/start/middleware";
import type { FetchEvent } from "@solidjs/start/server";
import { getLocale } from "~/server/i18n/locale";

export default createMiddleware({
	onRequest: [locale],
});

async function locale(event: FetchEvent) {
	event.locals.locale = await getLocale();
}

// async function checkUserAuth(event: FetchEvent) {
// 	const { pathname } = new URL(event.request.url);
// 	try {
// 		if (pathname === "/app/login") {
// 			const user = await validateAuthSession(event.nativeEvent);
// 			if (user) {
// 				return sendRedirect("/app");
// 			}
// 			return;
// 		}
// 		if (pathname.startsWith("/app")) {
// 			const user = await validateAuthSession(event.nativeEvent);
// 			if (user) {
// 				return;
// 			}

// 			setCookie(RETURN_URL_COOKIE, new URL(event.request.url).pathname, {
// 				httpOnly: true,
// 				maxAge: 15 * 60, // 10 minutes
// 			});
// 			return sendRedirect("/app/login", 401);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		return sendRedirect("/houston", 500);
// 	}
// 	return;
// }

declare module "@solidjs/start/server" {
	interface RequestEventLocals {
		locale: Intl.Locale;
	}
}
