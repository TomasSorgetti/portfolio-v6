<script lang="ts">
	import TeamCard from '../ui/TeamCard.svelte';
	import DesignIcon from '../../assets/icons/design.png';
	import ArchitectureIcon from '../../assets/icons/architecture.png';
	import MindsetIcon from '../../assets/icons/mindset.png';
	import VisualIcon from '../../assets/icons/visual.png';

	const reasonList = [
		{
			title: 'Design-Driven Development',
			description:
				'I turn clear UI designs into seamless, intuitive interfaces built with clean, reliable code.',
			icon: DesignIcon
		},
		{
			title: 'Scalable Full-Stack Architecture',
			description:
				'I build secure, high-performance apps with Node.js and modern JavaScript frameworks.',
			icon: ArchitectureIcon
		},
		{
			title: 'Collaborative & Proactive Mindset',
			description:
				'I communicate openly, adapt fast, and help deliver strong results in agile teams.',
			icon: MindsetIcon
		},
		{
			title: 'Crafting Impactful Visual Experiences',
			description:
				'I craft engaging visuals and smooth interactions that elevate your product’s identity.',
			icon: VisualIcon
		}
	];
</script>

<section
	class="text-center min-h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center md:grid-cols-2 lg:justify-start lg:my-30"
>
	<h2 class="text-xl md:text-4xl lg:text-5xl">Reasons to Bring Me Onto Your Team</h2>

	<ul class="mt-16 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:mt-12">
		{#each reasonList as reason}
			<li>
				<TeamCard title={reason.title} description={reason.description} icon={reason.icon} />
			</li>
		{/each}
	</ul>
</section>
