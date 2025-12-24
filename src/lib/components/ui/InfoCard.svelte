<script>
	export let title;
	export let content;
	export let span = false;
</script>

<article
	data-label={title}
	tabindex="0"
	role="article"
	class="bg-black/60 backdrop-blur-md rounded-2xl py-12 px-8 border border-border md:py-16 md:px-8 md:min-h-75"
	class:md:col-span-2={span}
>
	<h3 class="font-semibold mb-4 text-2xl lg:text-[2rem]">{title}</h3>
	<p class="font-light md:max-w-100">{content}</p>

	<slot />
</article>
