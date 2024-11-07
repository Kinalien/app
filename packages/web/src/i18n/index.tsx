import { createI18n } from "./adapter";
import * as paraglide from "./runtime/runtime";

export type AvailableLanguageTag = paraglide.AvailableLanguageTag;
export const { availableLanguageTags, sourceLanguageTag } = paraglide;

export const { LanguageTagProvider, languageTag, setLanguageTag } = createI18n(paraglide);
export { m } from "./runtime/messages";
