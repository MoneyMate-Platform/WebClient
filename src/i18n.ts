import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

// Importing the i18n resources.
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import et from "./locales/et.json";

/**
 * The `resources` object is a key-value pair of language codes and their respective resources.
 */
const resources: Record<string, { translation: object }> = {
	en: {translation: en},
	ru: {translation: ru},
	et: {translation: et}
}

/**
 * Initializes the i18n instance.
 *
 * @see https://react.i18next.com/latest/i18next-instance
 */
i18n
	.use(detector)
  .use(backend)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({

		resources: resources,

		// The `lng` option is used to set the initial language.
		lng: "en",

		// The `fallbackLng` option is used to set the fallback language.
		fallbackLng: "en",

		// `interpolation` is used to configure the interpolation options.
		// The `escapeValue` option is used to specify whether the interpolation values should be escaped.
		interpolation: {escapeValue: false}
	});

export {i18n};