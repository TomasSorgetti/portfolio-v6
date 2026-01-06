<script lang="ts">
	import { LoaderCircle, X } from '@lucide/svelte';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let isLoading: boolean = false;
	export let error: boolean = false;

	$: isButtonDisabled = disabled || isLoading;
</script>

<button
	{type}
	class={`w-full bg-white text-font-invert font-bold text-base h-12 rounded-xl cursor-pointer ${disabled && 'opacity-80'}`}
	disabled={isButtonDisabled}
	aria-disabled={isButtonDisabled}
	aria-busy={isLoading}
>
	{#if error}
		<span class="flex items-center justify-center gap-2">
			<X class="text-red-500" />
			Something went wrong
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
