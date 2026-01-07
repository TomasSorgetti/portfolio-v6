<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	onMount(() => {
		const circles = document.querySelectorAll('.animatedCircle');
		const lines = document.querySelectorAll('.animatedPath');
		const icon = document.querySelectorAll('.animatedIcon');
		gsap.fromTo(
			circles,
			{ scale: 1 },
			{
				scale: 1.1,
				duration: 0.5,
				stagger: 0.1,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
				transformOrigin: 'center'
			}
		);
		lines.forEach((line) => {
			gsap.fromTo(
				line,
				{ opacity: 1 },
				{ opacity: 0.5, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut', stagger: 0.2 }
			);
		});
		gsap.fromTo(
			icon,
			{ scale: 1 },
			{
				scale: 1.05,
				duration: 1.5,
				stagger: 0.1,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
				transformOrigin: 'center'
			}
		);
	});
</script>

<svg width="262" height="262" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle class="animatedCircle" cx="50.5" cy="180.5" r="11" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="50" cy="81.5" r="11" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="209" cy="81.5" r="11" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="176.5" cy="102.5" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="81.5" cy="103" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="129.5" cy="74" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="129.5" cy="188" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="176.5" cy="160" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="164.5" cy="190" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="176.5" cy="220" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="99.5" cy="193" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="95.5" cy="73" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="81.5" cy="45" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="159.5" cy="70" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="194.5" cy="128" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="81.5" cy="160.5" r="5.5" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="209" cy="180.5" r="11" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="129" cy="227.5" r="11" stroke="white" stroke-width="3" />
	<circle class="animatedCircle" cx="129" cy="35.5" r="11" stroke="white" stroke-width="3" />
	<path
		class="animatedPath"
		d="M82 155V108M86.5 100.5L124.5 76.5M134 76.5L171.5 99.5M176.5 108V155M172 162.5L134.5 185M124.5 185L86 162.5"
		stroke="white"
		stroke-width="4"
	/>
	<path
		class="animatedPath"
		d="M195 123V100.5M169.5 187.5L187.5 176M166.5 195L174.5 215.5M104 195C105.2 195 116.5 202.667 122 206.5M90.5 75.5L72.5 86M93 68L84 50M155 67L136.5 56"
		stroke="white"
		stroke-width="4"
	/>
	<path
		class="animatedPath"
		d="M199.5 174.5L181 162.5M129 193V216M59.5 174.5L76.5 162.5M59.5 87.5L76.5 99.5M129 46V68.5M181 99.5L199.5 87.5M211.5 92V126M211.5 138.5V170M199.5 187.5L175 202.5M165 207.5L139 223.5M118 223.5L58 187.5M47.5 170V138.5M47.5 126V92M58 75L82 61M93.5 54L118.5 39M140 39L199.5 75"
		stroke="white"
		stroke-width="4"
	/>
	<path
		class="animatedPath"
		d="M226 133C215.667 131.167 195 133.2 195 156M202.5 152L195 158L188 151M228.5 126.5L235.5 133L228.5 139"
		stroke="white"
		stroke-width="4"
	/>
	<path
		class="animatedPath"
		d="M27 125C27.4 125.4 31.1667 130.167 33 132.5M33 132.5L27 139M33 132.5H46C60 132.5 64 128.4 64 106M64 106L71 113M64 106L57.5 113"
		stroke="white"
		stroke-width="4"
	/> <circle cx="63.5" cy="139" r="1.5" fill="white" stroke="white" />
	<circle cx="63.5" cy="146" r="1.5" fill="white" stroke="white" />
	<circle cx="63.5" cy="153" r="1.5" fill="white" stroke="white" />
	<circle cx="63.5" cy="160" r="1.5" fill="white" stroke="white" />
	<path
		class="animatedIcon"
		d="M127 115V105H113.75M113.75 105H100.5V118.5M113.75 105V129M110.5 132H100.5V118.5M100.5 118.5H124M118 153.5L101.5 157.5L102 142L103.976 140M118 153.5L151.16 119.5M118 153.5L103.976 140M137 106.578L143.5 100L157.5 113L151.16 119.5M137 106.578L151.16 119.5M137 106.578L132.631 111M103.976 140L110.5 133.398M110.5 133.398L114.5 138M110.5 133.398L116 127.831M116 127.831L120 132M116 127.831L121.5 122.265M121.5 122.265L125 126.5M121.5 122.265L127 116.699M127 116.699L131 121M127 116.699L132.631 111M132.631 111L136.5 114.5"
		stroke="white"
		stroke-width="2"
	/>
	<path
		class="animatedIcon"
		d="M145 137.333C146.9 137.333 148.723 138.089 150.067 139.433C151.411 140.777 152.166 142.599 152.166 144.5C152.166 146.401 151.411 148.224 150.067 149.568C148.723 150.912 146.9 151.667 145 151.667C143.099 151.667 141.276 150.912 139.932 149.568C138.588 148.224 137.833 146.401 137.833 144.5C137.833 142.599 138.588 140.777 139.932 139.433C141.276 138.089 143.099 137.333 145 137.333ZM145 140.917C144.049 140.917 143.138 141.294 142.466 141.966C141.794 142.638 141.416 143.55 141.416 144.5C141.416 145.451 141.794 146.362 142.466 147.034C143.138 147.706 144.049 148.083 145 148.083C145.95 148.083 146.862 147.706 147.534 147.034C148.206 146.362 148.583 145.451 148.583 144.5C148.583 143.55 148.206 142.638 147.534 141.966C146.862 141.294 145.95 140.917 145 140.917ZM141.416 162.417C140.968 162.417 140.592 162.094 140.521 161.664L139.858 156.916C138.729 156.468 137.761 155.859 136.83 155.143L132.368 156.952C131.974 157.096 131.491 156.952 131.276 156.558L127.692 150.359C127.583 150.174 127.544 149.956 127.583 149.745C127.623 149.534 127.738 149.345 127.907 149.212L131.688 146.238L131.562 144.5L131.688 142.708L127.907 139.788C127.738 139.656 127.623 139.466 127.583 139.255C127.544 139.044 127.583 138.826 127.692 138.641L131.276 132.442C131.491 132.048 131.974 131.887 132.368 132.048L136.83 133.84C137.761 133.141 138.729 132.532 139.858 132.084L140.521 127.336C140.592 126.906 140.968 126.583 141.416 126.583H148.583C149.031 126.583 149.407 126.906 149.479 127.336L150.142 132.084C151.271 132.532 152.238 133.141 153.17 133.84L157.631 132.048C158.025 131.887 158.509 132.048 158.724 132.442L162.307 138.641C162.54 139.036 162.433 139.519 162.092 139.788L158.312 142.708L158.437 144.5L158.312 146.292L162.092 149.212C162.433 149.481 162.54 149.965 162.307 150.359L158.724 156.558C158.509 156.952 158.025 157.113 157.631 156.952L153.17 155.161C152.238 155.859 151.271 156.468 150.142 156.916L149.479 161.664C149.407 162.094 149.031 162.417 148.583 162.417H141.416ZM143.656 130.167L142.993 134.843C140.843 135.291 138.944 136.438 137.564 138.032L133.246 136.169L131.903 138.498L135.683 141.275C134.966 143.365 134.966 145.635 135.683 147.725L131.885 150.52L133.228 152.849L137.582 150.986C138.962 152.563 140.843 153.709 142.975 154.139L143.638 158.833H146.361L147.024 154.157C149.156 153.709 151.038 152.563 152.417 150.986L156.771 152.849L158.115 150.52L154.316 147.743C155.033 145.647 155.033 143.371 154.316 141.275L158.097 138.498L156.753 136.169L152.435 138.032C151.027 136.402 149.118 135.287 147.006 134.861L146.343 130.167H143.656Z"
		fill="white"
	/></svg
>

<style>
	svg {
		display: block;
		margin: auto;
		background-color: black; /* Fondo negro para contraste */
	}
</style>
