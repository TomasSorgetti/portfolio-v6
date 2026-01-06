<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Tomás Sorgetti | Full Stack Developer | React & Node.js Expert</title>
	<meta
		name="description"
		content="Junior Full Stack Developer specialized in MERN/PERN stack. Building high-performance, scalable web applications with a focus on UX and clean code."
	/>
</svelte:head>

<div class="min-h-screen">
	<Navbar />
	{@render children()}
	<Footer />
</div>
