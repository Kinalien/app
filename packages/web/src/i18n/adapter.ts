import {
  type Accessor,
  type ContextProviderComponent,
  createContext,
  useContext,
} from "solid-js";
import { isServer } from "solid-js/web";

/**
 * The compiled paraglide runtime module.
 * (e.g. "paraglide/runtime.js")
 */
export interface Paraglide<T extends string> {
  readonly setLanguageTag: (language_tag: T | (() => T)) => void;
  readonly languageTag: () => T;
  readonly onSetLanguageTag: (callback: (language_tag: T) => void) => void;
  readonly availableLanguageTags: readonly T[];
  readonly sourceLanguageTag: T;
}

export interface I18n<T extends string> {
  readonly languageTag: Accessor<T>;
  readonly setLanguageTag: (language_tag: T) => void;
  readonly LanguageTagProvider: ContextProviderComponent<T>;
}

/**
 * Create an i18n adapter for SolidStart.
 *
 * @param paraglide The compiled paraglide runtime module. (e.g. "paraglide/runtime.js")
 * @returns An i18n adapter for SolidStart.
 * @example
 * ```ts
 * import * as paraglide from '../paraglide/runtime.js'
 *
 * export const {LanguageTagProvider, languageTag, setLanguageTag} = adapter.createI18n(paraglide)
 * ```
 */
export function createI18n<T extends string>(paraglide: Paraglide<T>): I18n<T> {
  let languageTag: I18n<T>["languageTag"];
  let setLanguageTag: I18n<T>["setLanguageTag"];
  let LanguageTagProvider: I18n<T>["LanguageTagProvider"];

  // SERVER
  if (isServer) {
    const LanguageTagCtx = createContext<T>();
    LanguageTagProvider = LanguageTagCtx.Provider;

    setLanguageTag = () => {
      throw new Error("setLanguageTag not available on server");
    };
    languageTag = () => {
      const ctx = useContext(LanguageTagCtx);
      if (!ctx) {
        throw new Error("LanguageTagCtx not found");
      }
      return ctx;
    };

    paraglide.setLanguageTag(languageTag);
  }
  // BROWSER
  else {
    let language_tag: T;

    LanguageTagProvider = (props) => {
      language_tag = props.value;
      paraglide.setLanguageTag(language_tag);

      return props.children;
    };

    setLanguageTag = paraglide.setLanguageTag;
    languageTag = () => language_tag;
  }

  return {
    languageTag,
    setLanguageTag,
    LanguageTagProvider,
  };
}
