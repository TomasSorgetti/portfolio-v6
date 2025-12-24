<script lang="ts">
	import TeamCard from '../ui/TeamCard.svelte';

	const reasonList = [
		{
			title: 'Design-Driven Development',
			description:
				'I turn clear UI designs into seamless, intuitive interfaces built with clean, reliable code.'
		},
		{
			title: 'Scalable Full-Stack Architecture',
			description:
				'I build secure, high-performance apps with Node.js and modern JavaScript frameworks.'
		},
		{
			title: 'Collaborative & Proactive Mindset',
			description:
				'I communicate openly, adapt fast, and help deliver strong results in agile teams.'
		},
		{
			title: 'Crafting Impactful Visual Experiences',
			description:
				'I craft engaging visuals and smooth interactions that elevate your product’s identity.'
		}
	];
</script>

<section
	class="text-center min-h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center md:grid-cols-2 lg:justify-start"
>
	<h2 class="text-xl md:text-4xl lg:text-5xl">Reasons to Bring Me Onto Your Team</h2>

	<ul class="mt-16 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:mt-12">
		{#each reasonList as reason}
			<li>
				<TeamCard title={reason.title} description={reason.description} />
			</li>
		{/each}
	</ul>
</section>
