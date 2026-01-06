<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
</script>

<article
	class="border border-border rounded-4xl p-8 relative min-h-92 w-full max-w-100 bg-black flex flex-col items-center justify-start gap-1 lg:h-94"
	aria-labelledby="card-title"
	aria-describedby="card-description"
>
	<figure class="flex flex-col items-center">
		<img src={icon} alt={title} draggable="false" loading="lazy" class="aspect-square w-40" />
	</figure>

	<header>
		<h3 id="card-title" class="font-semibold my-4 text-2xl">
			{title}
		</h3>
	</header>

	<p id="card-description" class="font-thin">
		{description}
	</p>
</article>
