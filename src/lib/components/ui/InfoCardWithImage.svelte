<script>
	export let title;
	export let content;
	export let imageSrc;
	export let imageAlt;
</script>

<article
	role="article"
	tabindex="0"
	data-label={title}
	class="relative bg-black/60 backdrop-blur-md rounded-2xl py-12 px-8 border border-border pb-75 md:py-16 md:px-8 md:min-h-75 md:col-span-2 md:pb-12"
>
	<h3 class="font-semibold mb-4 text-2xl lg:text-[2rem]">{title}</h3>
	<p class="font-light md:max-w-100">{content}</p>

	<div
		class="absolute bottom-0 left-0 h-75 w-full overflow-hidden md:h-full md:w-60 md:left-[calc(100%-15rem)] md:overflow-hidden"
	>
		<img
			src={imageSrc}
			alt={imageAlt}
			loading="lazy"
			draggable={false}
			class="h-auto w-full md:h-full md:w-auto"
		/>
	</div>
</article>
