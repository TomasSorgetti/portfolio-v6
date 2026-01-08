import type { Handle } from '@sveltejs/kit';
import { resolveLanguage } from '$lib/i18n/server';

export const handle: Handle = async ({ event, resolve }) => {
	const langParam = event.params.lang;
	const language = resolveLanguage(langParam);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', language)
	});
};
