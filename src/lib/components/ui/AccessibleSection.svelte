<script>
	let { backgroundImage = null, label, children, ...attributes } = $props();
</script>

<section
	aria-label={label}
	class="w-full px-16 py-4 bg-cover bg-center bg-no-repeat text-center"
	style:background-image={backgroundImage ? `url('${backgroundImage}')` : undefined}
	{...attributes}
>
	{@render children?.()}
</section>
