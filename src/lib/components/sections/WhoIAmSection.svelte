<script>
	import AccessibleSection from '../ui/AccessibleSection.svelte';
	import InfoCard from '../ui/InfoCard.svelte';
	import InfoCardWithImage from '../ui/InfoCardWithImage.svelte';
	import DiscordCard from '../ui/DiscordCard.svelte';

	import RotativeWorld from '../../assets/images/rotative_world.png';
	import Discord from '../../assets/images/discord.png';
</script>

<AccessibleSection id="who-i-am" label="Beyond the Terminal section">
	<div class="lg:my-20">
		<h2 class="text-[2rem] font-bold md:text-[2.5rem] lg:text-5xl">
			Problem Solving Beyond Syntax
		</h2>

		<p class="max-w-125 my-4 mx-auto font-light">
			I believe that great code is fueled by a well-rounded life. driven by endless curiosity, a
			passion for design, and the drive to solve real-world problems.
		</p>
	</div>

	<div
		class="text-left grid grid-cols-1 gap-4 max-w-175 my-12 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl"
	>
		<InfoCardWithImage
			title="Design-Driven Logic"
			content="My background in design isn't just about aesthetics; it’s about understanding user behavior to write better functional requirements."
		/>

		<InfoCard
			title="User-Centric Engineering"
			content="I write code that solves problems. Every function and component is built with the end-user’s experience in mind."
		/>

		<InfoCard
			title="Continuous Iteration"
			content="Tech evolves, and so does my stack. I’m currently deep-diving into TypeScript and Unit Testing to improve delivery quality."
		/>

		<InfoCardWithImage
			title="Agile & Team-Ready"
			content="I thrive in collaborative environments, using Git-flow and agile methodologies to contribute effectively from day one."
			type="rocket"
		>
			<button
				class="mt-8 py-3 px-6 bg-white text-font-invert font-bold rounded-full cursor-pointer"
			>
				Download Resume
			</button>
		</InfoCardWithImage>

		<!-- <DiscordCard
			title="Community & Connection"
			content="Need a coding partner or want to discuss the latest tech trends? I'm active on Discord and always open to sharing knowledge or collaborating on open-source ideas."
			imageSrc={Discord}
			imageAlt="Discord logo icon"
			link="https://discord.com/users/tomassorg456"
		/> -->
	</div>
</AccessibleSection>
