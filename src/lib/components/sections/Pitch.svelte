<script lang="ts">
	import TeamCard from '../ui/TeamCard.svelte';
	import DesignIcon from '../../assets/icons/design.png';
	import ArchitectureIcon from '../../assets/icons/architecture.png';
	import MindsetIcon from '../../assets/icons/mindset.png';
	import VisualIcon from '../../assets/icons/visual.png';

	const reasonList = [
		{
			title: 'Clean & Maintainable Code',
			description:
				'I prioritize readability and documentation so the team can scale the project without friction.',
			icon: DesignIcon
		},
		{
			title: 'Full-Stack Autonomy',
			description:
				'Capable of handling everything from database schema design to frontend state management.',
			icon: ArchitectureIcon
		},
		{
			title: 'Proactive Communication',
			description:
				'I ask the right questions early to avoid technical debt and align with business goals.',
			icon: MindsetIcon
		}
	];
</script>

<section
	class="text-center bg-center bg-no-repeat bg-cover flex flex-col items-center md:grid-cols-2 lg:justify-start lg:my-30"
>
	<h2 class="text-xl font-bold md:text-4xl lg:max-w-3xl lg:text-6xl lg:leading-18">
		Why I’m a Great Fit for Your Engineering Team
	</h2>

	<ul class="mt-16 grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:mt-16">
		{#each reasonList as reason}
			<li>
				<TeamCard title={reason.title} description={reason.description} icon={reason.icon} />
			</li>
		{/each}
	</ul>
</section>
