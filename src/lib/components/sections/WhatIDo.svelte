<script lang="ts">
	import FeatureItem from '../ui/FeatureItem.svelte';
	import PinkWorld from '../../assets/images/pink_world.png';

	type Feature = {
		number: string;
		title: string;
		text: string;
	};

	const features: Feature[] = [
		{
			number: '01.',
			title: 'From Design to Code.',
			text: 'I translate Figma prototypes into pixel-perfect, accessible interfaces, ensuring design fidelity and seamless transitions.'
		},
		{
			number: '02.',
			title: 'Performance-First Frontend.',
			text: 'Building with React & Next.js focused on Core Web Vitals, SEO, and component modularity for long-term scalability.'
		},
		{
			number: '03.',
			title: 'Solid Server-Side Logic.',
			text: 'Developing secure RESTful APIs with Node.js and PostgreSQL, prioritizing data integrity and system reliability.'
		}
	];
</script>

<section id="what-i-do" class="py-4 -translate-y-10" aria-labelledby="features-title">
	<div
		class="w-full max-w-5xl mx-auto bg-card-background rounded-2xl p-8 relative border border-border md:pl-50 lg:py-16 pr-24 pl-50"
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
					Technical Expertise & Workflow
				</h2>
			</header>

			<div class="w-full h-px bg-primary my-8 lg:my-12" role="presentation"></div>

			<ul class="flex flex-col items-start gap-4 lg:flex-row lg:gap-6" role="list">
				{#each features as feature (feature.number)}
					<FeatureItem number={feature.number} title={feature.title} text={feature.text} />
				{/each}
			</ul>
		</article>
	</div>
</section>
