<script lang="ts">
	import GithubIcon from '../../assets/images/github.png';
</script>

<section
	class="py-32 bg-cover bg-center bg-no-repeat"
	style="background-image: url('/images/cta_bg.png')"
>
	<div
		class="max-w-5xl mx-auto border border-border rounded-2xl bg-black/60 backdrop-blur-md px-20 py-24 flex gap-2 items-center justify-between"
	>
		<div class="flex flex-col gap-2 items-start">
			<h2 class="font-bold text-5xl">Validation & Open Source</h2>
			<p class="mt-4 text-font-secondary max-w-sm">
				I don't just build products; I maintain clean, documented, and collaborative code. Explore
				my workflow firsthand.
			</p>
			<a
				href="/#"
				class="mt-4 flex items-center justify-center rounded-full text-center font-semibold py-3 px-6 bg-white text-font-invert"
				>Explore my GitHub</a
			>
		</div>
		<img src={GithubIcon} alt="" draggable="false" loading="lazy" />
	</div>
</section>
