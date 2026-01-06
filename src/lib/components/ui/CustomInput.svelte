<script lang="ts">
	export let id: string;
	export let label: string;
	export let hasLabel: boolean;
	export let type: 'email' | 'text' | 'textarea';
	export let name: string;
	export let placeholder: string;
	export let error: string | undefined;
	export let value: string;
	export let required: boolean = false;

	import { X } from '@lucide/svelte';

	const errorId = `${id}-error`;
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
			on:blur
			class={`border rounded-xl bg-black/60 w-full h-12 p-2 ${error ? 'border-red-500 text-red-500' : 'border-border text-white'}`}
			aria-invalid={Boolean(error)}
			aria-describedby={error ? errorId : undefined}
			{required}
			bind:value
		/>
	{:else}
		<textarea
			{id}
			{name}
			{placeholder}
			on:blur
			class={`min-h-36 resize-none border rounded-xl bg-black/60 w-full p-2 ${error ? 'border-red-500 text-red-500' : 'border-border text-white'}`}
			aria-invalid={Boolean(error)}
			aria-describedby={error ? errorId : undefined}
			{required}
			bind:value
		></textarea>
	{/if}

	{#if error}
		<div
			class={`absolute right-0 p-2 cursor-pointer group text-red-500 ${type === 'textarea' ? 'top-0' : 'bottom-1/2 translate-y-1/2'}`}
		>
			<X class="w-5" />
			<div class="relative transition-all duration-300 opacity-0 group-hover:opacity-100">
				<small
					id={errorId}
					class="absolute -top-16 block bg-black border border-border py-1 px-2 rounded-sm min-w-40"
					aria-live="assertive"
				>
					{error}
				</small>
			</div>
		</div>
	{/if}
</div>
