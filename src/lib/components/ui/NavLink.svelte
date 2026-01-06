<script>
	let { href = '#', label = '', active, ...attributes } = $props();
</script>

<a
	{href}
	class={`block px-4 py-2 hover:text-white ${active ? 'text-white' : 'text-font-secondary'}`}
	{...attributes}
>
	{label}
</a>
