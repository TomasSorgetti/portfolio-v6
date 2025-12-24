<script>
	import NavLink from '../ui/NavLink.svelte';

	let isMobileMenuExpanded = $state(false);

	const navigationItems = [
		{ href: '/#what-i-do', label: 'What I Do' },
		{ href: '/#who-i-am', label: 'Who I Am' },
		{ href: '/#my-work', label: 'My Work' },
		{ href: '/#contact', label: 'Get in Touch' }
	];

	function toggleMobileMenu() {
		isMobileMenuExpanded = !isMobileMenuExpanded;
	}

	function closeMobileMenu() {
		isMobileMenuExpanded = false;
	}
</script>

{#snippet navigationList(itemClass = '')}
	{#each navigationItems as item (item.href)}
		<li class={itemClass}>
			<NavLink href={item.href} label={item.label} />
		</li>
	{/each}
{/snippet}
<header
	class="fixed top-0 left-0 z-90 w-full shadow-sm bg-black/60 backdrop-blur-md border-b border-border"
>
	<nav
		class="mx-auto w-full container flex items-center justify-between p-4"
		aria-label="Main navigation"
	>
		<a
			href="/"
			class="text-2xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
			aria-label="Tomás Sorgetti - Home"
			onclick={closeMobileMenu}
		>
			Tomás Sorgetti
		</a>
		<button
			id="mobile-menu-trigger"
			type="button"
			class="lg:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
			aria-expanded={isMobileMenuExpanded}
			aria-controls="mobile-navigation-list"
			aria-label={isMobileMenuExpanded ? 'Close main menu' : 'Open main menu'}
			onclick={toggleMobileMenu}
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				{#if isMobileMenuExpanded}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>

		<ul class="hidden lg:flex gap-6" role="list">
			{@render navigationList('')}
		</ul>
	</nav>

	<div
		id="mobile-navigation-list"
		class:hidden={!isMobileMenuExpanded}
		class="lg:hidden px-4 pb-4 transition-all"
	>
		<ul class="flex flex-col gap-2" role="list">
			{@render navigationList('w-full')}
		</ul>
	</div>
</header>
