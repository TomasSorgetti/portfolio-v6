import type { LayoutLoad } from './$types';
import { translations } from '$lib/i18n/translations';
import { SUPPORTED_LANGUAGES } from '$lib/i18n/config';

type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const load: LayoutLoad = ({ params, depends }) => {
	depends('app:lang');

	const language: Language = SUPPORTED_LANGUAGES.includes(params.lang as Language)
		? (params.lang as Language)
		: 'en';

	return {
		lang: language,
		translations: translations[language],
		seo: translations[language].seo.home
	};
};
