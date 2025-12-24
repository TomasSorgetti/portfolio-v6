<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Junior Full Stack Developer - JavaScript & Web Solutions | Tomás Sorgetti</title>
	<meta
		name="description"
		content="Looking for a Full Stack Dev? I build scalable web apps using React & Node.js. Passionate about SaaS & Agile environments. See my portfolio & let's connect!"
	/>
	
</svelte:head>

<div class="min-h-screen">
	<Navbar />
	{@render children()}
	<Footer />
</div>
