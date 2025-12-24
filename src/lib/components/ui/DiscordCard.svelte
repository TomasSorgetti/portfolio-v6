<script>
	export let imageSrc;
	export let imageAlt;
	export let title;
	export let content;
	export let link;
</script>

<article
	role="group"
	tabindex="0"
	data-label={title}
	class="bg-black/60 backdrop-blur-md rounded-2xl border border-border p-8 text-center flex flex-col items-center md:py-16 md:px-8 md:min-h-75 md:col-span-2 md:flex-row md:gap-16 md:text-left"
>
	<img
		src={imageSrc}
		alt={imageAlt}
		draggable={false}
		loading="lazy"
		width="282"
		height="221"
		class="md:w-50 md:h-auto"
	/>

	<div>
		<h3 class="font-semibold mb-4 text-2xl lg:text-[2rem]">{title}</h3>
		<p class="font-light mb-8 max-w-100">{content}</p>

		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Open Discord profile"
			class="underline focus:outline-none focus:ring-2 focus:ring-white rounded"
		>
			Discord
		</a>
	</div>
</article>
