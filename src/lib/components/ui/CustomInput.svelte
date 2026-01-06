<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { X } from '@lucide/svelte';

	export let id: string;
	export let label: string;
	export let hasLabel: boolean;
	export let type: 'email' | 'text' | 'textarea';
	export let name: string;
	export let placeholder: string;
	export let error: string | undefined;
	export let value: string;
	export let required = false;

	const dispatch = createEventDispatcher<{ blur: void }>();
	const errorId = `${id}-error`;

	function handleBlur(): void {
		dispatch('blur');
	}
</script>

<div class="relative w-full">
	<label for={id} class={!hasLabel ? 'sr-only' : undefined}>
		{label}
	</label>

	{#if type !== 'textarea'}
		<input
			{id}
			{type}
			{name}
			{placeholder}
			autocomplete={type === 'email' ? 'email' : undefined}
			class={`border rounded-xl bg-black/60 w-full h-12 p-2 ${
				error ? 'border-red-500 text-red-500' : 'border-border text-white'
			}`}
			aria-invalid={Boolean(error)}
			aria-describedby={error ? errorId : undefined}
			{required}
			bind:value
			on:blur={handleBlur}
		/>
	{:else}
		<textarea
			{id}
			{name}
			{placeholder}
			class={`min-h-36 resize-none border rounded-xl bg-black/60 w-full p-2 ${
				error ? 'border-red-500 text-red-500' : 'border-border text-white'
			}`}
			aria-invalid={Boolean(error)}
			aria-describedby={error ? errorId : undefined}
			{required}
			bind:value
			on:blur={handleBlur}
		></textarea>
	{/if}

	{#if error}
		<span
			class={`absolute right-0 p-2 text-red-500 ${
				type === 'textarea' ? 'top-0' : 'bottom-1/2 translate-y-1/2'
			}`}
			aria-hidden="true"
		>
			<X class="w-5" />
		</span>

		<p id={errorId} class="sr-only" role="alert" aria-live="assertive">
			{error}
		</p>
	{/if}
</div>
