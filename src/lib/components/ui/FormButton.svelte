<script lang="ts">
	import { LoaderCircle, X, Check } from '@lucide/svelte';

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let isLoading = false;
	export let success = false;
	export let error = false;

	$: isButtonDisabled = disabled || isLoading || success;
</script>

<button
	{type}
	disabled={isButtonDisabled}
	aria-disabled={isButtonDisabled}
	aria-busy={isLoading}
	class="w-full bg-white text-font-invert font-bold text-base h-12 rounded-xl cursor-pointer hover:opacity-80 active:opacity-100 transition"
>
	{#if error}
		<span class="flex items-center justify-center gap-2">
			<X class="text-red-500" />
			Something went wrong
		</span>
	{:else if success}
		<span class="flex items-center justify-center gap-2">
			<Check class="text-green-500" />
			Message sent
		</span>
	{:else if isLoading}
		<span class="flex items-center justify-center gap-2">
			<LoaderCircle class="animate-spin" />
			Sending message
		</span>
	{:else}
		<slot />
	{/if}
</button>
