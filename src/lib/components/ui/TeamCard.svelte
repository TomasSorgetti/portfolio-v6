<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
</script>

<article
	class="border border-border rounded-4xl p-8 relative h-80 w-full max-w-100 mx-auto bg-black/60 backdrop-blur-2xl"
>
	<img src={icon} alt={title} />
	<div>
		<h3 class="font-semibold my-4 text-2xl">{title}</h3>
		<p class="font-thin">{description}</p>
	</div>
</article>
