<script lang="ts">
	import NodeNetwork from './NodeNetwork.svelte';
	import RocketIcon from './RocketIcon.svelte';

	export let title: string;
	export let content: string;
	export let type: 'rocket' | 'default' = 'default';

	const headingId = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
</script>

<article
	aria-labelledby={`${headingId}-heading`}
	class="relative bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-border pb-75 md:min-h-75 md:pb-12 md:flex md:justify-between md:gap-4"
>
	<div>
		<h3 id={`${headingId}-heading`} class="font-semibold mb-4 text-2xl lg:text-[2rem]">
			{title}
		</h3>

		<p class="font-light md:max-w-xs text-font-secondary">
			{content}
		</p>

		<slot />
	</div>

	<div
		class="w-full aspect-square p-4 flex items-center justify-end md:w-auto md:h-full md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2"
		aria-hidden="true"
	>
		{#if type === 'rocket'}
			<RocketIcon />
		{:else}
			<NodeNetwork />
		{/if}
	</div>
</article>
