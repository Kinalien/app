import * as paraglide from "../paraglide/runtime";
import { createI18n } from "./adapter";

export type AvailableLanguageTag = paraglide.AvailableLanguageTag;
export const { availableLanguageTags, sourceLanguageTag } = paraglide;

export const { LanguageTagProvider, languageTag, setLanguageTag } =
  createI18n(paraglide);
