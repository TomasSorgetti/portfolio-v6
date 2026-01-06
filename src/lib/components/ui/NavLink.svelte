<script lang="ts">
	let {
		href = '#',
		label,
		active = false,
		...attributes
	}: {
		href?: string;
		label: string;
		active?: boolean;
		[key: string]: unknown;
	} = $props();
</script>

<a
	{href}
	class={`block px-4 py-2 transition hover:text-white ${
		active ? 'text-white' : 'text-font-secondary'
	}`}
	aria-current={active ? 'page' : undefined}
	{...attributes}
>
	{label}
</a>
