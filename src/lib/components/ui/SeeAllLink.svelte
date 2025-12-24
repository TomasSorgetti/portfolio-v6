<script lang="ts">
	export let profileUrl: string;
</script>

<div
	class="pl-2 pt-16 aspect-square w-full max-w-70 absolute top-0 left-0 z-20 pointer-events-none"
>
	<a
		href={profileUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="text-xl sm:text-4xl flex items-center text-left pointer-events-auto"
		aria-label="Visit GitHub profile to see all projects"
	>
		<p class="max-w-24 sm:max-w-42">See all projects</p>
		<span
			class="h-10 w-10 md:h-16 md:w-16 rounded-full border border-white flex items-center justify-center ml-2"
			aria-hidden="true"
		>
			+
		</span>
	</a>
</div>
