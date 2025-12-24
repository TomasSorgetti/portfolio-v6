<script>
	let { href = '#', label = '', ...attributes } = $props();
</script>

<a
	{href}
	class="block px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
	{...attributes}
>
	{label}
</a>
