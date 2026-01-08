<script lang="ts">
	import { onMount, type Component, type Snippet } from 'svelte';

	type AnyComponent<P extends Record<string, any>> = Component<P> | { default: Component<P> };

	interface Props<P extends Record<string, any> = Record<string, any>> {
		componentLoader: () => Promise<AnyComponent<P>>;
		fallback?: Snippet;
		enablePrefetch?: boolean;
		componentProps?: P;
	}

	let { componentLoader, fallback, enablePrefetch = true, componentProps }: Props = $props();

	let LoadedComponent = $state<Component<any> | null>(null);
	let rootElement = $state<HTMLDivElement | null>(null);
	let hasLoaded = $state(false);
	let hasError = $state(false);

	async function executeLoad() {
		if (hasLoaded) return;

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
			([entry]) => {
				if (entry.isIntersecting) {
					executeLoad();
					observer.disconnect();
				}
			},
			{ rootMargin: '200px', threshold: 0.01 }
		);

		observer.observe(rootElement);
		return () => observer.disconnect();
	});
</script>

<div bind:this={rootElement} class="min-h-px w-full">
	{#if hasLoaded && LoadedComponent}
		<LoadedComponent {...componentProps} />
	{:else if hasError}
		<div role="alert">Failed to load content.</div>
	{:else}
		{@render fallback?.()}
	{/if}
</div>
