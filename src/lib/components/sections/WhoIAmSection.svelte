<script lang="ts">
	import AccessibleSection from '../ui/AccessibleSection.svelte';
	import InfoCard from '../ui/InfoCard.svelte';
	import InfoCardWithImage from '../ui/InfoCardWithImage.svelte';

	type ImageCard = {
		variant: 'image';
		title: string;
		content: string;
		type?: 'rocket' | 'default';
	};

	type DefaultCard = {
		variant: 'default';
		title: string;
		content: string;
	};

	type CardContent = ImageCard | DefaultCard;

	const cards: CardContent[] = [
		{
			variant: 'image',
			title: 'Design-Driven Logic',
			content:
				"My background in design isn't just about aesthetics; it’s about understanding user behavior to write better functional requirements."
		},
		{
			variant: 'default',
			title: 'User-Centric Engineering',
			content:
				'I write code that solves problems. Every function and component is built with the end-user’s experience in mind.'
		},
		{
			variant: 'default',
			title: 'Continuous Iteration',
			content:
				'Tech evolves, and so does my stack. I’m currently deep-diving into TypeScript and Unit Testing to improve delivery quality.'
		},
		{
			variant: 'image',
			title: 'Agile & Team-Ready',
			content:
				'I thrive in collaborative environments, using Git-flow and agile methodologies to contribute effectively from day one.',
			type: 'rocket'
		}
	];
</script>

<AccessibleSection id="who-i-am" label="Beyond the Terminal section">
	<header class="lg:my-20 text-center">
		<h2 class="text-[2rem] font-bold md:text-[2.5rem] lg:text-5xl">
			Problem Solving Beyond Syntax
		</h2>

		<p class="max-w-125 my-4 mx-auto font-light">
			I believe that great code is fueled by a well-rounded life. driven by endless curiosity, a
			passion for design, and the drive to solve real-world problems.
		</p>
	</header>

	<ul
		class="text-left grid grid-cols-1 gap-4 max-w-175 my-12 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl"
		role="list"
	>
		{#each cards as card (card.title)}
			<li>
				{#if card.variant === 'image'}
					<InfoCardWithImage
						title={card.title}
						content={card.content}
						type={card.type ?? 'default'}
					>
						{#if card.type === 'rocket'}
							<button
								type="button"
								class="mt-8 py-3 px-6 bg-white text-font-invert font-bold rounded-full cursor-pointer"
								aria-label="Download resume"
							>
								Download Resume
							</button>
						{/if}
					</InfoCardWithImage>
				{:else}
					<InfoCard title={card.title} content={card.content} />
				{/if}
			</li>
		{/each}
	</ul>
</AccessibleSection>
