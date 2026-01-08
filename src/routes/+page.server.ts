import { redirect } from '@sveltejs/kit';
import { DEFAULT_LANGUAGE } from '$lib/i18n/config';

export function load() {
	throw redirect(307, `/${DEFAULT_LANGUAGE}`);
}
