<script lang="ts">
	import AccessibleSection from '../ui/AccessibleSection.svelte';
	import InfoCard from '../ui/InfoCard.svelte';
	import InfoCardWithImage from '../ui/InfoCardWithImage.svelte';

	export let translations: any;

	const { title, content, cards: cardsTranslations } = translations;

	type ImageCard = {
		variant: 'image';
		title: string;
		content: string;
		leyend: string;
		type?: 'rocket' | 'default';
	};

	type DefaultCard = {
		variant: 'default';
		title: string;
		content: string;
		leyend: string;
	};

	type CardContent = ImageCard | DefaultCard;

	const cards: CardContent[] = [
		{
			variant: 'image',
			title: cardsTranslations[1].title,
			content: cardsTranslations[1].content,
			leyend: cardsTranslations[1].leyend,
			type: 'default'
		},
		{
			variant: 'default',
			title: cardsTranslations[2].title,
			content: cardsTranslations[2].content,
			leyend: cardsTranslations[2].leyend
		},
		{
			variant: 'default',
			title: cardsTranslations[3].title,
			content: cardsTranslations[3].content,
			leyend: cardsTranslations[3].leyend
		},
		{
			variant: 'image',
			title: cardsTranslations[4].title,
			content: cardsTranslations[4].content,
			leyend: cardsTranslations[4].leyend,
			type: 'rocket'
		}
	];
</script>

<AccessibleSection id="who-i-am" label="Beyond the Terminal section">
	<header class="lg:my-20 text-center">
		<h2 class="text-[2rem] font-bold md:text-[2.5rem] lg:text-5xl lg:max-w-4xl lg:mx-auto">
			{title}
		</h2>

		<p class="max-w-125 my-4 mx-auto font-light">
			{content}
		</p>
	</header>

	<ul
		class="text-left grid grid-cols-1 gap-4 max-w-175 my-12 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl"
		role="list"
	>
		{#each cards as card (card.title)}
			<li class={`${card.variant === 'image' ? 'md:col-span-2' : ''}`}>
				{#if card.variant === 'image'}
					<InfoCardWithImage
						title={card.title}
						content={card.content}
						leyend={card.leyend}
						type={card.type ?? 'default'}
					>
						{#if card.type === 'rocket'}
							<button
								type="button"
								class="mt-4 py-3 px-6 bg-white text-font-invert font-bold rounded-full cursor-pointer"
								aria-describedby="resume-desc"
							>
								Download Resume
							</button>
						{/if}
					</InfoCardWithImage>
				{:else}
					<InfoCard title={card.title} content={card.content} leyend={card.leyend} />
				{/if}
			</li>
		{/each}
	</ul>
</AccessibleSection>
