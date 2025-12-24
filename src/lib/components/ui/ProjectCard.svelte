<script lang="ts">
	interface Props {
		title: string;
		description: string;
		imageSrc: string;
		imageAlt?: string;
		link?: string;
		containerClass?: string;
		contentClass?: string;
		imageClass?: string;
	}

	export let title: string;
	export let description: string;
	export let imageSrc: string;
	export let imageAlt: string = '';
	export let link: string | undefined = undefined;
	export let containerClass: string = '';
	export let contentClass: string = '';
	export let imageClass: string = '';
</script>

<article class="relative overflow-hidden {containerClass}">
	<a href={link} target="_blank" rel="noopener noreferrer" class="w-full h-full">
		<figure class="h-full w-full relative m-0">
			<figcaption class="z-10 {contentClass}">
				<h3 class="font-bold text-2xl">
					{title}
				</h3>
				<p class="mt-2 text-font-secondary text-sm md:text-base">
					{description}
				</p>
			</figcaption>

			<img
				src={imageSrc}
				alt={imageAlt || `User interface design for ${title}`}
				draggable="false"
				loading="lazy"
				class="h-full w-full object-cover {imageClass}"
			/>
		</figure>
	</a>
</article>
