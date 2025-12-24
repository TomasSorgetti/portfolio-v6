<script>
	export let number;
	export let text;
</script>

<li class="flex flex-col gap-2" data-label="feature-item">
	<span class="text-3xl font-thin" aria-hidden="true">{number}</span>
	<p class="font-thin">{text}</p>
</li>
