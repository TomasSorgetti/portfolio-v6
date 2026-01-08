<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	const { data, children } = $props();
</script>

<svelte:head>
	<title>{data.seo.title}</title>
	<meta name="description" content={data.seo.description} />
</svelte:head>

{#key data.lang}
	<div class="min-h-screen">
		<Navbar language={data.lang} />
		{@render children()}
		<Footer language={data.lang} />
	</div>
{/key}
