export const SUPPORTED_LANGUAGES = [
	'es',
	'en',
	'ja',
	'zh',
	'pt',
	'it',
	'de',
	'fr',
	'ru',
	'hi'
] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';
