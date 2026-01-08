import { englishTranslations } from './en';
import { spanishTranslations } from './es';
import { japaneseTranslations } from './ja';
import { chineseTranslations } from './zh';
import { portugueseTranslations } from './pt';
import { italianTranslations } from './it';
import { germanTranslations } from './de';
import { frenchTranslations } from './fr';
import { rusianTranslations } from './ru';
import { indianTranslations } from './hi';

export const translations = {
	es: spanishTranslations,
	en: englishTranslations,
	ja: japaneseTranslations,
	zh: chineseTranslations,
	pt: portugueseTranslations,
	it: italianTranslations,
	de: germanTranslations,
	fr: frenchTranslations,
	ru: rusianTranslations,
	hi: indianTranslations
} as const;
