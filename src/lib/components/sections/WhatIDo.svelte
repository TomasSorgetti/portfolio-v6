<script>
	import FeatureItem from '../ui/FeatureItem.svelte';
	import PinkWorld from '../../assets/images/pink_world.png';
</script>

<section
	id="what-i-do"
	class="py-4 -translate-y-10"
	aria-labelledby="features-title"
	data-label="features-section"
>
	<div
		class="w-full max-w-5xl mx-auto bg-card-background rounded-2xl p-8 relative border border-border md:pl-50 lg:py-16 pr-24 pl-50"
		data-label="features-container"
	>
		<div
			class="hidden absolute top-0 left-0 h-full w-50 overflow-hidden rounded-2xl md:flex md:justify-center md:items-center"
			data-label="features-image-wrapper"
			aria-hidden="true"
		>
			<img
				src={PinkWorld}
				alt=""
				draggable="false"
				loading="lazy"
				class="h-full aspect-square -translate-x-20 animate-spin-slow"
			/>
		</div>

		<div data-label="features-content">
			<h2
				id="features-title"
				class="text-3xl mb-8 lg:text-5xl lg:max-w-md"
				data-label="features-heading"
			>
				Technical Expertise & Workflow
			</h2>

			<div class="w-full h-px bg-primary my-8 lg:my-12" role="presentation"></div>

			<ul
				class="flex flex-col items-start gap-4 lg:flex-row lg:gap-12"
				role="list"
				data-label="features-list"
			>
				<FeatureItem
					number="01."
					text="From Design to Code. I translate Figma prototypes into pixel-perfect, accessible interfaces, ensuring design fidelity and seamless transitions."
				/>

				<FeatureItem
					number="02."
					text="Performance-First Frontend. Building with React & Next.js focused on Core Web Vitals, SEO, and component modularity for long-term scalability."
				/>

				<FeatureItem
					number="03."
					text="Solid Server-Side Logic. Developing secure RESTful APIs with Node.js and PostgreSQL, prioritizing data integrity and system reliability."
				/>
			</ul>
		</div>
	</div>
</section>
