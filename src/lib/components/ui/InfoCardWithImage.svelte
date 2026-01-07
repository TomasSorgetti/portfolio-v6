<script lang="ts">
	import AnimatedSVG from './AnimatedSVG.svelte';
	import RocketIcon from './RocketIcon.svelte';

	export let title: string;
	export let content: string;
	export let leyend: string;
	export let type: 'rocket' | 'default' = 'default';

	const headingId = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
</script>

<article
	aria-labelledby={`${headingId}-heading`}
	class="relative bg-black/60 backdrop-blur-md rounded-2xl p-8 pt-0 border flex flex-col-reverse border-border md:min-h-78 md:flex md:justify-between md:gap-4"
>
	<div class="text-center md:text-left">
		<h3 id={`${headingId}-heading`} class="font-semibold mb-2 text-2xl lg:text-[2rem]">
			{title}
		</h3>

		<p class="font-light md:max-w-xs text-font-secondary text-md mt-6">
			{content}
		</p>

		<small class="text-sm italic mt-4 block max-w-75 mx-auto md:mx-0">{leyend}</small>

		<slot />
	</div>

	<div
		class="w-full aspect-square flex items-center justify-center md:w-auto md:h-full md:p-4 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2"
		aria-hidden="true"
	>
		{#if type === 'rocket'}
			<RocketIcon />
		{:else}
			<AnimatedSVG />
		{/if}
	</div>
</article>
