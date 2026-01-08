<script lang="ts">
	import FeatureItem from '../ui/FeatureItem.svelte';
	import PinkWorld from '../../assets/images/pink_world.png';

	export let translations: any;

	const { title, cards } = translations;

	type Feature = {
		number: string;
		title: string;
		text: string;
	};

	const features: Feature[] = [
		{
			number: '01.',
			title: cards[1].title,
			text: cards[1].text
		},
		{
			number: '02.',
			title: cards[2].title,
			text: cards[2].text
		},
		{
			number: '03.',
			title: cards[3].title,
			text: cards[3].text
		}
	];
</script>

<section id="what-i-do" class="py-4 -translate-y-10 px-4" aria-labelledby="features-title">
	<div
		class="w-full max-w-5xl mx-auto bg-card-background rounded-2xl p-8 relative border border-border text-center md:text-left md:pr-24 md:pl-50 lg:py-16"
	>
		<div
			class="hidden absolute top-0 left-0 h-full w-50 overflow-hidden rounded-2xl md:flex"
			aria-hidden="true"
		>
			<img
				src={PinkWorld}
				alt=""
				draggable="false"
				loading="lazy"
				class="h-full w-full object-cover object-right animate-spin-slow -translate-x-20 scale-120"
			/>
		</div>

		<article>
			<header>
				<h2 id="features-title" class="text-3xl mb-8 lg:text-5xl lg:max-w-md">
					{title}
				</h2>
			</header>

			<div class="w-full h-px bg-primary my-8 lg:my-12" role="presentation"></div>

			<ul class="flex flex-col items-center gap-4 lg:flex-row lg:gap-6 lg:items-start" role="list">
				{#each features as feature (feature.number)}
					<FeatureItem number={feature.number} title={feature.title} text={feature.text} />
				{/each}
			</ul>
		</article>
	</div>
</section>
