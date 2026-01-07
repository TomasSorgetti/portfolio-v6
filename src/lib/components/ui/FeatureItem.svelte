<script lang="ts">
	export let number: string;
	export let title: string;
	export let text: string;
</script>

<li class="flex flex-col gap-2">
	<span class="text-3xl font-thin" aria-hidden="true">
		{number}
	</span>

	<h3 class="text-white font-semibold text-xl md:max-w-40">{title}</h3>
	<p class="font-thin text-base max-w-sm">
		{text}
	</p>
</li>
