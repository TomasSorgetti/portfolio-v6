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
			<p class="text-2xl font-thin lg:text-[3.25rem]">Hi, I'm Tomás</p>

			<h1 id="hero-heading" class="text-[2rem] font-black mb-4 lg:text-[3.25rem]">
				Full Stack Developer
			</h1>

			<p class="text-base font-thin mb-4 max-w-lg leading-relaxed xl:max-w-125">
				I engineer scalable web applications using the <strong>JavaScript ecosystem</strong>.
				Focusing on <strong>performance and UX</strong>, I bring technical precision and an agile
				mindset to help <strong>SaaS teams drive growth.</strong>
			</p>

			<div class="pt-4 flex flex-wrap items-center gap-4">
				<MainButton href="#contact" label="Let's work together" />
			</div>
		</div>
	</div>
</section>
