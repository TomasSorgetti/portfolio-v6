<script>
	export let title;
	export let content;
	export let span = false;
</script>

<article
	data-label={title}
	class="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-border md:min-h-75"
	class:md:col-span-2={span}
>
	<h3 class="font-semibold mb-4 text-2xl lg:text-[2rem]">{title}</h3>
	<p class="font-light md:max-w-100 text-font-secondary">{content}</p>

	<slot />
</article>
