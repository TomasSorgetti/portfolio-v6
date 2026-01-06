<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';

	let rocket: SVGSVGElement;
	let flames: NodeListOf<SVGPathElement>;
	let particles: NodeListOf<SVGCircleElement>;

	let introTl: gsap.core.Timeline;
	let floatTl: gsap.core.Timeline;
	let flameTl: gsap.core.Timeline;
	let particleTl: gsap.core.Timeline;

	onMount(() => {
		flames = rocket.querySelectorAll('.flame');
		particles = rocket.querySelectorAll('.particle');

		introTl = gsap.fromTo(
			rocket,
			{ opacity: 0, rotate: -2 },
			{ opacity: 1, rotate: 0, duration: 0.9, ease: 'power2.out' }
		);

		floatTl = gsap.timeline({ repeat: -1, yoyo: true }).to(rocket, {
			rotate: 0.3, // antes: 2
			duration: 2.5, // más lento
			y: -0.01,
			ease: 'sine.inOut',
			transformOrigin: '50% 60%'
		});

		flameTl = gsap.timeline({ repeat: -1 }).to(flames, {
			scaleY: () => gsap.utils.random(0.92, 1.05),
			scaleX: () => gsap.utils.random(0.95, 1.02),
			opacity: () => gsap.utils.random(0.75, 1),
			duration: 0.35,
			stagger: { each: 0.12, from: 'random' },
			ease: 'sine.inOut',
			transformOrigin: '50% 0%'
		});

		particleTl = gsap.timeline({ repeat: -1, yoyo: true }).to(particles, {
			opacity: () => gsap.utils.random(0.3, 0.7),
			duration: 1.8,
			stagger: { each: 0.25, from: 'random' },
			ease: 'sine.inOut'
		});
	});

	onDestroy(() => {
		introTl?.kill();
		floatTl?.kill();
		flameTl?.kill();
		particleTl?.kill();
	});
</script>

<div class="flex items-center justify-center">
	<svg
		bind:this={rocket}
		viewBox="0 0 550 505"
		class="w-40 md:w-56"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- COHETE COMPLETO -->
		<g filter="url(#filter0_d_1619_87)">
			<path
				d="M340.5 189.525L245 276.525M256.5 222.025L240.5 226.525L294 285.525L302 271.025"
				stroke="white"
				stroke-width="9"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>

		<path
			d="M444 23.3059C411.824 35.5729 376.717 55.3401 343.5 86.0246C330.313 98.2058 319 110.587 309.325 122.525M444 23.3059C486.131 7.24345 523.238 4.04015 544.5 6.0246C544.5 39.4781 533.953 74.1802 518.197 105.525M444 23.3059C451.5 54.0254 481.155 92.7254 518.197 105.525M518.197 105.525C504.045 133.679 485.69 159.125 467 178.525C447.126 199.153 426.601 215.768 407 229.022M329.342 268.525C326.004 269.675 322.882 270.671 320 271.525L258 204.025C258.818 203.207 260.078 200.956 261.871 197.525M329.342 268.525C330.728 281.525 330.6 314.625 319 343.025C318.894 346.359 320.816 351.925 329.342 347.525C340 342.025 395 314.025 401.5 297.525C408 281.025 407 235.019 407 229.022M329.342 268.525C349.359 261.633 377.106 249.236 407 229.022M261.871 197.525C253.914 192.859 228.3 186.325 189.5 197.525C186 198.192 180.3 197.125 185.5 187.525C192 175.525 229 124.025 243.5 121.025C258 118.025 294.15 116.525 309.325 122.525M261.871 197.525C268.59 184.675 282.796 155.263 309.325 122.525"
			stroke="white"
			stroke-width="11"
			stroke-linejoin="round"
		/>

		<circle cx="419.5" cy="120.025" r="32.5" stroke="white" stroke-width="11" />

		<!-- ALA / ESTRUCTURA INFERIOR (ESTO FALTABA) -->
		<g filter="url(#filter1_d_1619_87)">
			<path
				d="M240.5 258.025C231.167 258.859 210.2 266.125 201 288.525C189.5 316.525 187.5 322.525 177 337.525C189 330.525 194.5 331.025 226.5 321.025C252.1 313.025 261.5 292.692 263 283.525"
				stroke="white"
				stroke-width="9"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>

		<path
			d="M276.5 297.525C273.667 310.025 261.6 337.025 236 345.025C204 355.025 199.5 350.525 181.5 365.025M228.5 244.025C209.5 245.525 184 258.025 172.5 288.025C160.275 319.917 162.5 316.025 152 330.525"
			stroke="white"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>

		<!-- PROPULSIÓN -->
		<path
			class="flame"
			d="M199.5 377.525L111.5 456.025"
			stroke="url(#paint0_linear_1619_87)"
			stroke-width="9"
			stroke-linecap="round"
		/>
		<path
			class="flame"
			d="M140 310.025L67 376.025"
			stroke="url(#paint1_linear_1619_87)"
			stroke-width="9"
			stroke-linecap="round"
		/>
		<path
			class="flame"
			d="M103 404.025L26 473.025"
			stroke="url(#paint2_linear_1619_87)"
			stroke-width="9"
			stroke-linecap="round"
		/>

		<!-- PARTÍCULAS -->
		<circle class="particle" cx="5.5" cy="490.525" r="5.5" fill="url(#paint3_linear_1619_87)" />
		<circle class="particle" cx="69.5" cy="498.525" r="5.5" fill="url(#paint4_linear_1619_87)" />
		<circle class="particle" cx="26.5" cy="411.525" r="5.5" fill="url(#paint5_linear_1619_87)" />
		<circle class="particle" cx="48.5" cy="392.525" r="5.5" fill="url(#paint6_linear_1619_87)" />
		<circle class="particle" cx="93.5" cy="472.525" r="5.5" fill="url(#paint7_linear_1619_87)" />
		<circle class="particle" cx="122.5" cy="386.525" r="5.5" fill="url(#paint8_linear_1619_87)" />
		<circle class="particle" cx="213.5" cy="444.525" r="5.5" fill="url(#paint9_linear_1619_87)" />
		<circle class="particle" cx="68.5" cy="298.525" r="5.5" fill="url(#paint10_linear_1619_87)" />
		<circle class="particle" cx="107.5" cy="266.525" r="5.5" fill="url(#paint11_linear_1619_87)" />
		<circle class="particle" cx="250.5" cy="406.525" r="5.5" fill="url(#paint12_linear_1619_87)" />
		<circle class="particle" cx="287.5" cy="373.525" r="5.5" fill="url(#paint13_linear_1619_87)" />

		<defs>
			<filter
				id="filter0_d_1619_87"
				x="190"
				y="108.025"
				width="229"
				height="225"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx="14" dy="-17" />
				<feGaussianBlur stdDeviation="30" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1619_87" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1619_87" result="shape" />
			</filter>
			<filter
				id="filter1_d_1619_87"
				x="149.5"
				y="204.525"
				width="175"
				height="168.5"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx="17" dy="-9" />
				<feGaussianBlur stdDeviation="20" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1619_87" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1619_87" result="shape" />
			</filter>
			<linearGradient
				id="paint0_linear_1619_87"
				x1="199.5"
				y1="377.911"
				x2="111.852"
				y2="456.035"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_1619_87"
				x1="140"
				y1="310.35"
				x2="66.4286"
				y2="375.051"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_1619_87"
				x1="103"
				y1="404.364"
				x2="26"
				y2="472.686"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_1619_87"
				x1="10.9519"
				y1="485.025"
				x2="0.0481286"
				y2="496.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" stop-opacity="0.6" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_1619_87"
				x1="74.9519"
				y1="493.025"
				x2="64.0481"
				y2="504.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" stop-opacity="0.6" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint5_linear_1619_87"
				x1="31.9519"
				y1="406.025"
				x2="21.0481"
				y2="417.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" stop-opacity="0.8" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint6_linear_1619_87"
				x1="53.9519"
				y1="387.025"
				x2="43.0481"
				y2="398.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" stop-opacity="0.9" />
				<stop offset="1" stop-color="white" stop-opacity="0.3" />
			</linearGradient>
			<linearGradient
				id="paint7_linear_1619_87"
				x1="98.9519"
				y1="467.025"
				x2="88.0481"
				y2="478.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" stop-opacity="0.8" />
				<stop offset="1" stop-color="white" stop-opacity="0.1" />
			</linearGradient>
			<linearGradient
				id="paint8_linear_1619_87"
				x1="127.952"
				y1="381.025"
				x2="117.048"
				y2="392.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" />
			</linearGradient>
			<linearGradient
				id="paint9_linear_1619_87"
				x1="218.952"
				y1="439.025"
				x2="208.048"
				y2="450.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" stop-opacity="0.4" />
			</linearGradient>
			<linearGradient
				id="paint10_linear_1619_87"
				x1="73.9519"
				y1="293.025"
				x2="63.0481"
				y2="304.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" stop-opacity="0.4" />
			</linearGradient>
			<linearGradient
				id="paint11_linear_1619_87"
				x1="112.952"
				y1="261.025"
				x2="102.048"
				y2="272.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" />
			</linearGradient>
			<linearGradient
				id="paint12_linear_1619_87"
				x1="255.952"
				y1="401.025"
				x2="245.048"
				y2="412.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" />
			</linearGradient>
			<linearGradient
				id="paint13_linear_1619_87"
				x1="292.952"
				y1="368.025"
				x2="282.048"
				y2="379.025"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="white" />
				<stop offset="1" stop-color="white" />
			</linearGradient>
		</defs>
	</svg>
</div>
