<script>
	import AccessibleSection from '../ui/AccessibleSection.svelte';
	import InfoCard from '../ui/InfoCard.svelte';
	import InfoCardWithImage from '../ui/InfoCardWithImage.svelte';
	import DiscordCard from '../ui/DiscordCard.svelte';

	import RotativeWorld from '../../assets/images/rotative_world.png';
	import Discord from '../../assets/images/discord.png';
</script>

<AccessibleSection label="Beyond the Terminal section">
	<div class="lg:my-16">
		<h2 class="text-[2rem] md:text-[2.5rem] lg:text-5xl">Beyond the Terminal</h2>

		<p class="max-w-125 my-4 mx-auto font-light">
			I believe that great code is fueled by a well-rounded life. driven by endless curiosity, a
			passion for design, and the drive to solve real-world problems.
		</p>
	</div>

	<div
		class="text-left grid grid-cols-1 gap-4 max-w-175 my-12 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl"
	>
		<InfoCardWithImage
			title="Fueling Creativity"
			content="When I’m not debugging, I’m sketching ideas or exploring new design trends. These creative pauses often lead to my best breakthroughs in logic and UI structure."
			imageSrc={RotativeWorld}
			imageAlt="Rotating world illustration"
		/>

		<InfoCard
			title="The 'Why' Behind the Code"
			content="It's not just about syntax; it's about the user. I strive to bridge the gap between complex logic and intuitive experiences, ensuring technology serves people, not the other way around."
		/>

		<InfoCard
			title="Commitment to Growth"
			content="The tech landscape never stops evolving, and neither do I. I am constantly learning new patterns and tools to write cleaner, more efficient, and scalable code every day."
		/>

		<DiscordCard
			title="Community & Connection"
			content="Need a coding partner or want to discuss the latest tech trends? I'm active on Discord and always open to sharing knowledge or collaborating on open-source ideas."
			imageSrc={Discord}
			imageAlt="Discord logo icon"
			link="https://discord.com/users/tomassorg456"
		/>
	</div>
</AccessibleSection>
