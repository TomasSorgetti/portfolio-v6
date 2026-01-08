<script lang="ts">
	import { onMount } from 'svelte';
	import { languageList } from '../data/languages.ts';
	import { goto } from '$app/navigation';

	const { locale } = $props<{ locale: string }>();

	let isOpen = $state(false);
	let buttonElement = $state<HTMLButtonElement | null>(null);
	let menuElement = $state<HTMLUListElement | null>(null);

	const currentLanguage =
		languageList.find((language) => language.code === locale) ?? languageList[0];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
		buttonElement?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				isOpen &&
				!buttonElement?.contains(event.target as Node) &&
				!menuElement?.contains(event.target as Node)
			) {
				closeMenu();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});
</script>

<div class="relative inline-block">
	<button
		bind:this={buttonElement}
		type="button"
		class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 flex items-center gap-2"
		aria-haspopup="listbox"
		aria-expanded={isOpen}
		onclick={toggleMenu}
		onkeydown={handleKeydown}
	>
		<img
			src={`/images/flags/${currentLanguage.code}.png`}
			alt="{currentLanguage.name} flag"
			class="rounded-full h-5 w-5"
		/>
		<span>{currentLanguage.name}</span>
	</button>

	<ul
		bind:this={menuElement}
		role="listbox"
		aria-label="Select language"
		class:hidden={!isOpen}
		class="absolute right-0 mt-6 min-w-full rounded-md border border-border bg-background shadow-lg"
	>
		{#each languageList as language (language.code)}
			<li role="option" aria-selected={language.code === locale}>
				<button
					type="button"
					onclick={() =>
						goto(`/${language.code}`, {
							invalidate: ['app:lang']
						})}
					class="block px-4 py-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset {language.code ===
					locale
						? 'text-font-primary'
						: 'text-font-secondary hover:text-font-primary'}"
				>
					{language.name}
				</button>
			</li>
		{/each}
	</ul>
</div>
