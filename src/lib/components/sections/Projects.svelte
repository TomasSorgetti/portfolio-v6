<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import SeeAllLink from '$lib/components/ui/SeeAllLink.svelte';

	import SOCIAL from '$lib/constants/social';

	import ProterlineImage from '../../assets/images/projects/proterline.png';
	import SieteVidasImage from '../../assets/images/projects/sietevidas.png';
	import GoosterImage from '../../assets/images/projects/gooster.png';
	import EscrowImage from '../../assets/images/projects/iescrow.png';
	import KodaImage from '../../assets/images/projects/koda.png';
	import BlogifyImage from '../../assets/images/projects/blogify.png';

	export let translations: any;

	const { title, cta, projects: projectsTranslations } = translations;

	type Project = {
		id: 'proterline' | 'gooster' | 'sieteVidas' | 'iEscrow';
		title: string;
		description: string;
		image: string;
		imageAlt: string;
		link: string;
	};

	const projects: Record<Project['id'], Project> = {
		proterline: {
			id: 'proterline',
			title: projectsTranslations.proterline.title,
			description: projectsTranslations.proterline.content,
			image: ProterlineImage,
			imageAlt: projectsTranslations.proterline.imageAlt,
			link: 'https://proterline.com.ar'
		},
		gooster: {
			id: 'gooster',
			title: projectsTranslations.gooster.title,
			description: projectsTranslations.gooster.content,
			image: GoosterImage,
			imageAlt: projectsTranslations.gooster.imageAlt,
			link: 'https://gooster.com.ar'
		},
		sieteVidas: {
			id: 'sieteVidas',
			title: projectsTranslations.sieteVidas.title,
			description: projectsTranslations.sieteVidas.content,
			image: SieteVidasImage,
			imageAlt: projectsTranslations.sieteVidas.imageAlt,
			link: 'https://7vidas.online'
		},
		iEscrow: {
			id: 'iEscrow',
			title: projectsTranslations.iescrow.title,
			description: projectsTranslations.iescrow.content,
			image: EscrowImage,
			imageAlt: projectsTranslations.iescrow.imageAlt,
			link: 'https://iescrow.io'
		}
	};
</script>

<section
	id="my-work"
	class="container max-w-7xl mx-auto py-32 px-4 xl:px-0"
	aria-labelledby="portfolio-heading"
>
	<header>
		<h2 id="portfolio-heading" class="text-5xl text-center font-bold">
			{title}
		</h2>
	</header>

	<div class="relative flex items-start gap-4 mt-16">
		<div class="relative flex flex-col gap-4 w-full lg:max-w-3/4 lg:mx-auto">
			<div class="relative flex flex-col items-end gap-4 md:flex-row lg:mt-16">
				<div class="relative h-full aspect-square">
					<SeeAllLink profileUrl={SOCIAL.GITHUB}>{cta}</SeeAllLink>

					<ProjectCard
						title={projects.proterline.title}
						description={projects.proterline.description}
						imageSrc={projects.proterline.image}
						imageAlt={projects.proterline.imageAlt}
						link={projects.proterline.link}
						containerClass="h-full"
						contentClass="absolute right-0 top-6 px-6 w-1/2"
						imageClass="aspect-square"
					/>
				</div>

				<div
					class="relative h-full flex flex-col items-end gap-8 -translate-y-75 md:translate-0 lg:w-1/3 lg:gap-16"
				>
					<div class="contents">
						<ProjectCard
							title={projects.gooster.title}
							description={projects.gooster.description}
							imageSrc={projects.gooster.image}
							imageAlt={projects.gooster.imageAlt}
							link={projects.gooster.link}
							containerClass="rounded-full border-[0.12rem] border-border aspect-square h-[calc(50%-0.5rem)] flex items-start justify-center text-center"
							contentClass="p-8 absolute inset-0 flex flex-col items-center justify-start pt-12"
						/>
					</div>

					<div class="contents">
						<ProjectCard
							title={projects.sieteVidas.title}
							description={projects.sieteVidas.description}
							imageSrc={projects.sieteVidas.image}
							imageAlt={projects.sieteVidas.imageAlt}
							link={projects.sieteVidas.link}
							containerClass="rounded-4xl rounded-tl-[3rem] border-[0.12rem] border-border w-full md:max-w-140 h-[calc(50%-0.5rem)] md:w-2/1"
							contentClass="p-8 absolute left-0 top-0 max-w-xs"
						/>
					</div>
				</div>
			</div>

			<div class="h-100 w-full mt-6">
				<ProjectCard
					title={projects.iEscrow.title}
					description={projects.iEscrow.description}
					imageSrc={projects.iEscrow.image}
					imageAlt={projects.iEscrow.imageAlt}
					link={projects.iEscrow.link}
					containerClass="w-full border-[0.12rem] border-border rounded-4xl h-full"
					contentClass="absolute p-8 top-10 left-4 lg:top-12 lg:max-w-md"
					headingClass="lg:text-4xl"
				/>
			</div>

			<div class="relative cursor-not-allowed">
				<div class="absolute top-0 right-0 bg-primary py-2 px-4 rounded lg:-right-4">
					Coming Soon!
				</div>
				<div class="w-full my-6 h-125 overflow-hidden rounded-3xl">
					<img
						src={KodaImage}
						alt=""
						class="w-full h-full object-cover"
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>

			<div class="relative cursor-not-allowed">
				<div class="absolute top-0 right-0 bg-primary py-2 px-4 rounded lg:-right-4">
					Coming Soon!
				</div>
				<div class="w-full my-6 h-125 overflow-hidden rounded-3xl">
					<img
						src={BlogifyImage}
						alt=""
						class="w-full h-full object-cover"
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
