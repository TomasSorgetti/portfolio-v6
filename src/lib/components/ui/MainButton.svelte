<script lang="ts">
	export let href: string = '#';
	export let label: string;
</script>

<a
	{href}
	class="inline-flex items-center px-6 py-3 rounded-full text-base bg-white text-font-invert font-bold transition hover:opacity-80 active:opacity-100"
	aria-label={label}
>
	{label}
</a>
