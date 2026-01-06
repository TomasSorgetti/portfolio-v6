<script lang="ts">
	import { LoaderCircle, X, Check } from '@lucide/svelte';

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let isLoading = false;
	export let isSuccess = false;
	export let isError = false;

	$: isDisabled = disabled || isLoading || isSuccess;
</script>

<button
	{type}
	disabled={isDisabled}
	aria-disabled={isDisabled}
	aria-busy={isLoading}
	class="w-full bg-white text-font-invert font-bold text-base h-12 rounded-xl cursor-pointer hover:opacity-80 active:opacity-100 transition"
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
