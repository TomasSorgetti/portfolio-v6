<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	interface Node {
		id: number;
		x: number;
		y: number;
	}

	interface Connection {
		from: Node;
		to: Node;
	}

	let nodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100
	}));

	let connections: Connection[] = [];

	// Create connections between nodes
	for (let i = 0; i < nodes.length; i++) {
		for (let j = i + 1; j < nodes.length; j++) {
			connections.push({ from: nodes[i], to: nodes[j] });
		}
	}

	// GSAP Animation
	onMount(() => {
		const nodeElements = document.querySelectorAll<SVGCircleElement>('.node');

		// Floating nodes with more movement
		gsap.to(nodeElements, {
			y: '+=3', // Increased movement
			x: '+=1', // Slight horizontal movement
			repeat: -1,
			yoyo: true,
			duration: 1.5, // Faster duration for more dynamic effect
			ease: 'sine.inOut'
		});

		// Pulse effect with glowing lines
		const pulseLines = () => {
			gsap.to('.line', {
				stroke: 'rgba(255, 255, 255, 0.5)',
				strokeWidth: 1.5, // Thicker lines during pulse
				repeat: 1,
				yoyo: true,
				duration: 0.5,
				stagger: 0.5,
				onComplete: pulseLines
			});
		};

		pulseLines();
	});

	function handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		const nodes = document.querySelectorAll<SVGCircleElement>('.node');

		nodes.forEach((node) => {
			const rect = node.getBoundingClientRect();
			const dx = rect.left + rect.width / 2 - clientX;
			const dy = rect.top + rect.height / 2 - clientY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const moveDistance = Math.max(10 - distance / 30, 0); // Increase distance for more movement
			const angle = Math.atan2(dy, dx);
			const xMove = Math.cos(angle) * moveDistance;
			const yMove = Math.sin(angle) * moveDistance;

			node.style.transform = `translate(${xMove}px, ${yMove}px)`;
		});
	}
</script>

<div class="container" data-label="node-network" aria-hidden="true" on:mousemove={handleMouseMove}>
	<svg width="100%" height="100%">
		{#each connections as { from, to }}
			<line class="line" x1={from.x + '%'} y1={from.y + '%'} x2={to.x + '%'} y2={to.y + '%'} />
		{/each}

		{#each nodes as { id, x, y }}
			<circle class="node" cx={x + '%'} cy={y + '%'} r="4" />
		{/each}
	</svg>
</div>

<style>
	.container {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.line {
		stroke: rgba(255, 255, 255, 0.2);
		stroke-width: 1;
		transition: stroke-width 0.2s ease;
	}

	.node {
		fill: white;
		opacity: 0.8;
		transition: transform 0.1s;
	}
</style>
