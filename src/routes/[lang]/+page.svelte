<script>
	import HomeBanner from '$lib/components/sections/HomeBanner.svelte';
	import LazyVisible from '$lib/components/ui/LazyVisible.svelte';

	const { data } = $props();
	const { banner, whatIDo, whoIAm, projects, pitch, cta, contact } = data.translations.home;
</script>

{#snippet loadingFallback()}
	<p class="py-8 text-center text-sm text-muted-foreground">Loading…</p>
{/snippet}

<main>
	<HomeBanner translations={banner} />

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/WhatIDo.svelte')}
		componentProps={{ translations: whatIDo }}
		fallback={loadingFallback}
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/WhoIAmSection.svelte')}
		componentProps={{ translations: whoIAm }}
		fallback={loadingFallback}
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Projects.svelte')}
		componentProps={{ translations: projects }}
		fallback={loadingFallback}
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Pitch.svelte')}
		componentProps={{ translations: pitch }}
		fallback={loadingFallback}
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Cta.svelte')}
		componentProps={{ translations: cta }}
		fallback={loadingFallback}
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Contact.svelte')}
		componentProps={{ translations: contact }}
		fallback={loadingFallback}
	/>
</main>
