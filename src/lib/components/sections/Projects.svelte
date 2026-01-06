<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import SeeAllLink from '$lib/components/ui/SeeAllLink.svelte';

	import proterlineImage from '../../assets/images/projects/proterline.png';
	import sieteVidasImage from '../../assets/images/projects/sietevidas.png';
	import goosterImage from '../../assets/images/projects/gooster.png';
	import escrowImage from '../../assets/images/projects/iescrow.png';

	const GITHUB_PROFILE = 'https://github.com/TomasSorgetti';

	const projects = {
		proterline: {
			title: 'Proterline',
			description:
				'Achieved 100/100 Lighthouse score. Focused on SEO, accessibility, and high-speed delivery using Astro.',
			image: proterlineImage,
			alt: 'Proterline dashboard interface showing analytics',
			link: 'https://proterline.com.ar'
		},
		gooster: {
			title: 'Gooster',
			description:
				'Optimized a React/Vite legacy codebase, improving load times by 40% and implementing a reusable component library.',
			image: goosterImage,
			alt: 'Gooster mobile application login screen',
			link: 'https://gooster.com.ar'
		},
		sieteVidas: {
			title: 'Siete Vidas',
			description:
				'Developed an Astro-based platform with dynamic data fetching, fully responsive design, and WCAG accessibility compliance.',
			image: sieteVidasImage,
			alt: 'Siete Vidas e-commerce platform homepage',
			link: 'https://7vidas.online'
		},
		iEscrow: {
			title: 'iEscrow',
			description:
				'Custom Design (images included) and layout using React/Vite. Frontend project focusing on structure and styling.',
			image: escrowImage,
			alt: 'iEscrow financial transaction secure panel',
			link: 'https://iescrow.io'
		}
	};
</script>

<section
	id="my-work"
	class="container max-w-7xl mx-auto py-32 px-4 xl:px-0"
	aria-labelledby="portfolio-heading"
>
	<h2 id="portfolio-heading" class="text-5xl md:text-8xl font-bold">
		Featured Engineering Projects
	</h2>

	<div class="relative flex items-start gap-4 mt-16" role="list">
		<div class="relative flex flex-col gap-4 h-150 lg:flex-row" role="listitem">
			<div class="relative flex flex-col gap-4 md:flex-row lg:w-3/4">
				<div class="relative h-full aspect-square">
					<SeeAllLink profileUrl={GITHUB_PROFILE} />

					<ProjectCard
						title={projects.proterline.title}
						description={projects.proterline.description}
						imageSrc={projects.proterline.image}
						imageAlt={projects.proterline.alt}
						link={projects.proterline.link}
						containerClass="h-full"
						contentClass="absolute right-0 top-6 px-6 w-1/2"
						imageClass="aspect-square"
					/>
				</div>

				<div
					class="relative h-full flex flex-col items-end gap-8 -translate-y-75 md:translate-0 lg:w-1/3"
				>
					<div role="listitem" class="contents">
						<ProjectCard
							title={projects.gooster.title}
							description={projects.gooster.description}
							imageSrc={projects.gooster.image}
							imageAlt={projects.gooster.alt}
							link={projects.gooster.link}
							containerClass="rounded-full border-[0.12rem] border-border aspect-square h-[calc(50%-0.5rem)] flex items-start justify-center text-center"
							contentClass="p-8 absolute inset-0 flex flex-col items-center justify-start pt-12"
						/>
					</div>

					<div role="listitem" class="contents">
						<ProjectCard
							title={projects.sieteVidas.title}
							description={projects.sieteVidas.description}
							imageSrc={projects.sieteVidas.image}
							imageAlt={projects.sieteVidas.alt}
							link={projects.sieteVidas.link}
							containerClass="rounded-4xl rounded-tl-[3rem] border-[0.12rem] border-border w-full md:max-w-140 h-[calc(50%-0.5rem)] md:w-2/1"
							contentClass="p-8 absolute left-0 top-0 max-w-xs"
						/>
					</div>
				</div>
			</div>
			<div role="listitem" class="h-full w-full -translate-y-75 md:translate-0 lg:w-1/4">
				<ProjectCard
					title={projects.iEscrow.title}
					description={projects.iEscrow.description}
					imageSrc={projects.iEscrow.image}
					imageAlt={projects.iEscrow.alt}
					link={projects.iEscrow.link}
					containerClass="w-full border-[0.12rem] border-border rounded-4xl h-full"
					contentClass="absolute p-8 top-0 left-0 lg:max-w-xs"
				/>
			</div>
		</div>
	</div>
</section>
