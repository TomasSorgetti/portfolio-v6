<script lang="ts">
	import GithubIcon from '../../assets/images/github.png';

	import SOCIAL from '../../constants/social';

	export let translations: any;

	const { title, content, cta } = translations;
</script>

<section
	class="px-4 py-16 bg-cover bg-center bg-no-repeat lg:py-32"
	style="background-image: url('/images/cta_bg.png')"
>
	<div
		class="max-w-5xl text-center mx-auto border border-border rounded-2xl bg-black/60 backdrop-blur-md px-8 py-12 flex flex-col-reverse gap-16 items-center justify-between lg:flex-row lg:text-left lg:px-20 lg:py-24"
	>
		<div class="flex flex-col gap-2 items-center lg:items-start">
			<h2 class="font-bold text-3xl lg:text-5xl">{title}</h2>
			<p class="mt-4 text-font-secondary max-w-sm">
				{content}
			</p>
			<a
				href={SOCIAL.GITHUB}
				target="_blank"
				class="mt-4 flex items-center justify-center rounded-full text-center font-semibold py-3 px-6 bg-white text-font-invert"
			>
				{cta}
			</a>
		</div>
		<img src={GithubIcon} alt="" draggable="false" loading="lazy" />
	</div>
</section>
