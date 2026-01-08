<script lang="ts">
	import TeamCard from '../ui/TeamCard.svelte';
	import DesignIcon from '../../assets/icons/design.png';
	import ArchitectureIcon from '../../assets/icons/architecture.png';
	import MindsetIcon from '../../assets/icons/mindset.png';

	export let translations: any;

	const { title, cards } = translations;

	type TeamFitReason = {
		title: string;
		description: string;
		icon: string;
	};

	const teamFitReasons: TeamFitReason[] = [
		{
			title: cards[1].title,
			description: cards[1].content,
			icon: DesignIcon
		},
		{
			title: cards[2].title,
			description: cards[2].content,
			icon: ArchitectureIcon
		},
		{
			title: cards[3].title,
			description: cards[3].content,
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
			{title}
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
