<script lang="ts">
	import { onMount } from 'svelte';
	import HeroVideo from '../../assets/videos/hero.mp4';
	import MainButton from '../ui/MainButton.svelte';

	let videoElement = $state<HTMLVideoElement | null>(null);
	let isVideoPaused = $state<boolean>(false);

	onMount(() => {
		const mediaQuery: MediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (mediaQuery.matches && videoElement) {
			videoElement.pause();
			isVideoPaused = true;
		}
	});
</script>

<section aria-labelledby="hero-heading" class="relative min-h-screen flex items-end justify-end">
	<div
		class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gray-900"
		aria-hidden="true"
	>
		<video
			bind:this={videoElement}
			src={HeroVideo}
			autoplay
			loop
			muted
			playsinline
			preload="metadata"
			class="w-full h-full object-cover scale-105"
		></video>
	</div>

	<div class="w-full h-full p-4 max-w-7xl mx-auto flex items-end justify-end">
		<div
			class="text-left pt-0 pr-4 pb-40 pl-12 sm:pt-0 sm:px-8 sm:pb-40 md:pr-16 lg:max-w-150 xl:max-w-175"
		>
			<p class="text-xl font-thin lg:text-2xl">Hi, I'm Tomás — Full Stack Developer</p>

			<h1 id="hero-heading" class="text-[2rem] font-black mb-4 lg:text-5xl lg:mt-2">
				Building High-Performance Web Apps for the Modern Web
			</h1>

			<p class="text-base font-thin mb-4 max-w-lg leading-relaxed xl:max-w-125">
				I bridge the gap between complex backend logic and intuitive frontend experiences.
				Specialized in JavaScript, performance optimization, and clean, maintainable code.
			</p>

			<div class="pt-4 flex flex-wrap items-center gap-4">
				<MainButton href="#my-work" label="View My Work" />
			</div>
		</div>
	</div>
</section>
