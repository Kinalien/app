"use server";

import { getRequestEvent } from "solid-js/web";

import type WWWDict from "./locales/en/www";
import type { SupportedLocale } from "./shared";

export interface NamespaceMap {
	www: typeof WWWDict;
}
export type Namespace = keyof NamespaceMap;

type LocaleLanguage = SupportedLocale extends `${infer Language}-${string}` ? Language : never;

async function fetchDictionary<T extends Namespace>(locale: LocaleLanguage, namespace: T) {
	const localeFiles = import.meta.glob("./locales/*/*.ts", {
		import: "default",
	});
	const routeModuleDict = (await localeFiles[
		`./locales/${locale}/${namespace}.ts`
	]?.()) as NamespaceMap[T];
	return routeModuleDict;
}

export const getDictionary = async <T extends Namespace>(namespace: T) => {
	const event = getRequestEvent();
	const locale = event!.locals.locale;
	return await fetchDictionary(locale.language as LocaleLanguage, namespace);
};
