<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { X } from '@lucide/svelte';

	type InputSize = 'sm' | 'md' | 'lg';

	export let id: string;
	export let label: string;
	export let hasLabel: boolean;
	export let type: 'email' | 'text' | 'textarea';
	export let name: string;
	export let placeholder: string;
	export let error: string | undefined;
	export let value: string;
	export let required = false;
	export let containerClass = '';
	export let size: InputSize = 'lg';
	export let errorClass = '';

	const dispatch = createEventDispatcher<{ blur: void }>();
	const errorId = `${id}-error`;

	function handleBlur(): void {
		dispatch('blur');
	}

	const sizeClasses: Record<InputSize, string> = {
		sm: 'text-sm h-9 rounded-lg',
		md: 'text-base h-11 rounded-lg',
		lg: 'text-lg h-12 rounded-xl'
	};
</script>

<div class="relative w-full {containerClass}">
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
			class={`border bg-black/60 w-full p-2
				${sizeClasses[size]}
				${error ? 'border-red-500 text-red-500' : 'border-border text-white'}
			`}
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
			class={`min-h-36 resize-none border rounded-xl bg-black/60 w-full p-2
				${sizeClasses[size].replace(/h-\d+/, '')}
				${error ? 'border-red-500 text-red-500' : 'border-border text-white'}
			`}
			aria-invalid={Boolean(error)}
			aria-describedby={error ? errorId : undefined}
			{required}
			bind:value
			on:blur={handleBlur}
		></textarea>
	{/if}

	{#if error}
		<div
			class="absolute z-20 right-0 p-2 text-red-500 {type === 'textarea'
				? 'top-0'
				: 'bottom-1/2 translate-y-1/2'}"
			aria-hidden="true"
		>
			<div class="relative group">
				<X class="w-5" />
				<small
					id={errorId}
					class="hidden absolute min-w-50 bg-black/80 py-1 px-2 rounded border border-border/60 group-hover:block {errorClass ||
						'left-5 -top-5'}"
					role="alert"
					aria-live="assertive"
				>
					{error}
				</small>
			</div>
		</div>
	{/if}
</div>
