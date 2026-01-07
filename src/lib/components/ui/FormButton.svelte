<script lang="ts">
	import { LoaderCircle, X, Check } from '@lucide/svelte';

	type Size = 'sm' | 'md' | 'lg';

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let isLoading = false;
	export let isSuccess = false;
	export let isError = false;
	export let containerClass = '';
	export let size: Size = 'lg';

	$: isDisabled = disabled || isLoading || isSuccess;

	const sizeClasses: Record<Size, string> = {
		sm: 'text-sm h-9 rounded-lg',
		md: 'text-base h-11 rounded-lg',
		lg: 'text-lg h-12 rounded-xl'
	};
</script>

<button
	{type}
	disabled={isDisabled}
	aria-disabled={isDisabled}
	aria-busy={isLoading}
	class="w-full bg-white text-font-invert font-semibold hover:opacity-80 active:opacity-100 transition {sizeClasses[
		size
	]} {containerClass} {isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}"
>
	<span aria-live="polite" class="flex items-center justify-center gap-2">
		{#if isError}
			<X class="text-red-500" aria-hidden="true" />
			<span>Something went wrong</span>
		{:else if isSuccess}
			<Check class="text-green-500" aria-hidden="true" />
			<span>Message sent</span>
		{:else if isLoading}
			<LoaderCircle class="animate-spin" aria-hidden="true" />
			<span>Sending message</span>
		{:else}
			<slot />
		{/if}
	</span>
</button>
