<script>
	import HomeBanner from '$lib/components/sections/HomeBanner.svelte';
	import LazyVisible from '$lib/components/ui/LazyVisible.svelte';
</script>

<main>
	<HomeBanner />

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/WhatIDo.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/WhoIAmSection.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Projects.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Pitch.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Cta.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>

	<LazyVisible
		componentLoader={() => import('$lib/components/sections/Contact.svelte')}
		enablePrefetch={false}
		class="w-full"
	/>
</main>
