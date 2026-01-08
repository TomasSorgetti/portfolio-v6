<script lang="ts">
	import { onMount } from 'svelte';
	import HeroVideo from '../../assets/videos/hero.mp4';
	import MainButton from '../ui/MainButton.svelte';

	export let translations: any;
	const { label, title, content, cta } = translations;

	let videoElement: HTMLVideoElement | null = null;
	let isMotionReduced = false;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		isMotionReduced = prefersReducedMotion.matches;

		if (isMotionReduced && videoElement) {
			videoElement.pause();
		}
	});
</script>

<section
	aria-labelledby="hero-heading"
	class="relative h-[80vh] flex items-end justify-end lg:h-[95vh]"
>
	<div
		class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gray-900"
		aria-hidden="true"
	>
		<video
			bind:this={videoElement}
			src={HeroVideo}
			autoplay={!isMotionReduced}
			loop
			muted
			playsinline
			preload="metadata"
			class="w-full h-full object-cover scale-105"
		></video>
	</div>

	<div
		class="w-full h-full p-4 max-w-7xl mx-auto flex items-center justify-center text-center lg:items-end lg:justify-end lg:text-left"
	>
		<article
			class="flex flex-col items-center max-w-lg md:max-w-xl lg:items-start lg:pb-20 lg:max-w-150 xl:max-w-175"
		>
			<p class="text-xl font-thin text-font-secondary lg:text-2xl">
				{label}
			</p>

			<h1 id="hero-heading" class="text-[2rem] md:text-4xl font-black mb-4 lg:text-5xl lg:mt-2">
				{title}
			</h1>

			<p class="text-base text-font-secondary font-thin mb-4 max-w-lg leading-relaxed xl:max-w-125">
				{content}
			</p>

			<div class="pt-4">
				<MainButton href="#my-work" label={cta} />
			</div>
		</article>
	</div>
</section>
