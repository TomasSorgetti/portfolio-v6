import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './config';
import type { Language } from './config';

export function resolveLanguage(param: string | undefined): Language {
	if (param && SUPPORTED_LANGUAGES.includes(param as Language)) {
		return param as Language;
	}
	return DEFAULT_LANGUAGE;
}
