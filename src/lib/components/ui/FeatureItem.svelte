<script lang="ts">
	export let number: string;
	export let text: string;
</script>

<li class="flex flex-col gap-2">
	<span class="text-3xl font-thin" aria-hidden="true">
		{number}
	</span>

	<p class="font-thin">
		{text}
	</p>
</li>
