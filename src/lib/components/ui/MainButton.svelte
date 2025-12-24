<script>
	export let href = '#';
	export let label = '';
</script>

<a
	{href}
	data-label={label}
	class="inline-flex items-center px-6 py-3 rounded-full text-base bg-white text-font-invert font-bold hover:opacity-80 active:opacity-100 transition"
	aria-label={label}>{label}</a
>
