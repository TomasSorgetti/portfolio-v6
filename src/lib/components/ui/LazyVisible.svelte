<script lang="ts">
	import { onMount, type Component, type Snippet } from 'svelte';

	interface Props {
		componentLoader: () => Promise<{ default: Component } | Component>;
		fallback?: Snippet;
		enablePrefetch?: boolean;
		[key: string]: unknown;
	}

	let {
		componentLoader,
		fallback,
		enablePrefetch = true,
		...containerAttributes
	}: Props = $props();

	let LoadedComponent = $state<Component | null>(null);
	let rootElement = $state<HTMLDivElement | null>(null);
	let hasLoaded = $state(false);
	let hasError = $state(false);

	async function executeLoad() {
		if (hasLoaded || !componentLoader) return;

		try {
			const module = await componentLoader();
			LoadedComponent = 'default' in module ? module.default : module;
			hasLoaded = true;
		} catch (error) {
			console.error('LazyLoad Error:', error);
			hasError = true;
		}
	}

	function handlePrefetch() {
		if (enablePrefetch && !hasLoaded) {
			componentLoader().catch(() => {});
		}
	}

	onMount(() => {
		if (!rootElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					executeLoad();
					observer.disconnect();
				}
			},
			{
				rootMargin: '200px',
				threshold: 0.01
			}
		);

		observer.observe(rootElement);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={rootElement}
	onmouseenter={handlePrefetch}
	onfocus={handlePrefetch}
	aria-busy={!hasLoaded && !hasError}
	aria-live="polite"
	class="min-h-px w-full"
	{...containerAttributes}
>
	{#if hasLoaded && LoadedComponent}
		<LoadedComponent />
	{:else if hasError}
		<div class="p-4 text-red-500 border border-red-200 bg-red-50 rounded" role="alert">
			<p>Failed to load content.</p>
		</div>
	{:else}
		{@render fallback?.()}
	{/if}
</div>
