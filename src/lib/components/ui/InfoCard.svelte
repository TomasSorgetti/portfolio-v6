<script lang="ts">
	export let title: string;
	export let content: string;
	export let span = false;

	const headingId = `${title.replace(/\s+/g, '-').toLowerCase()}-heading`;
</script>

<article
	aria-labelledby={headingId}
	class="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-border md:min-h-75"
	class:md:col-span-2={span}
>
	<h3 id={headingId} class="font-semibold mb-4 text-2xl lg:text-[2rem]">
		{title}
	</h3>

	<p class="font-light md:max-w-100 text-font-secondary">
		{content}
	</p>

	<slot />
</article>
