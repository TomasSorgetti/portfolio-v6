type MetaInput = {
	title: string;
	description: string;
	lang: string;
	path: string;
};

export function createSeoMeta({ title, description, lang, path }: MetaInput) {
	const baseUrl = 'https://tusitio.com';

	return {
		title,
		meta: [
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:locale', content: lang },
			{ rel: 'canonical', href: `${baseUrl}/${lang}${path}` }
		]
	};
}
