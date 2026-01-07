<script lang="ts">
	import TeamCard from '../ui/TeamCard.svelte';
	import DesignIcon from '../../assets/icons/design.png';
	import ArchitectureIcon from '../../assets/icons/architecture.png';
	import MindsetIcon from '../../assets/icons/mindset.png';

	type TeamFitReason = {
		title: string;
		description: string;
		icon: string;
	};

	const teamFitReasons: TeamFitReason[] = [
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
	aria-labelledby="team-fit-heading"
	class="text-center p-4 bg-center bg-no-repeat bg-cover flex flex-col items-center md:grid-cols-2 lg:justify-start lg:my-10"
>
	<header>
		<h2
			id="team-fit-heading"
			class="text-4xl font-bold md:text-5xl lg:max-w-3xl lg:text-6xl lg:leading-18"
		>
			Why I’m a Great Fit for Your Engineering Team
		</h2>
	</header>

	<ul class="grid grid-cols-1 p-4 md:grid-cols-3 lg:gap-4 lg:mt-16" role="list">
		{#each teamFitReasons as reason (reason.title)}
			<li>
				<TeamCard title={reason.title} description={reason.description} icon={reason.icon} />
			</li>
		{/each}
	</ul>
</section>
