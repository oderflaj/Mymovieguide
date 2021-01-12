import memoize from "lodash.memoize";
import i18n from "i18n-js";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";

export const translationGetters = {
  es: () => require("./es.json"),
  en: () => require("./en.json"),
};

export const IMLocalized = memoize(
  (key, config) =>
    i18n.t(key, config).includes("missing") ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const init = () => {
  let localeLanguageTag = Localization.locale;
  let isRTL = Localization.isRTL;

  IMLocalized.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config

  let language = "en";
  try {
    language = localeLanguageTag.substring(0, 2);
  } catch (error) {
    console.log("Error to define language:", error);
  }

  i18n.translations = {
    [localeLanguageTag]: translationGetters[language](),
  };
  i18n.locale = localeLanguageTag;
};
