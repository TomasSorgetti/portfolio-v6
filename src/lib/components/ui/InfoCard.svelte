<script lang="ts">
	export let title: string;
	export let content: string;
	export let leyend: string;
	export let span = false;

	const headingId = `${title.replace(/\s+/g, '-').toLowerCase()}-heading`;
</script>

<article
	aria-labelledby={headingId}
	class="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-border text-center md:min-h-78 md:text-left"
	class:md:col-span-2={span}
>
	<h3 id={headingId} class="font-semibold mb-6 text-2xl md:mb-2 lg:text-[2rem]">
		{title}
	</h3>

	<p class="font-light md:max-w-100 text-font-secondary text-md">
		{content}
	</p>

	<small class="text-sm italic mt-6 block md:mt-3">{leyend}</small>

	<slot />
</article>
