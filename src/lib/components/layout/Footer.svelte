<script lang="ts">
	import CustomInput from '../ui/CustomInput.svelte';
	import FormButton from '../ui/FormButton.svelte';
	import { ArrowRight } from '@lucide/svelte';

	import SOCIAL from '$lib/constants/social';
	import type { Language } from '$lib/i18n/types';

	interface FooterTranslations {
		website: {
			title: string;
			items: {
				what: string;
				who: string;
				projects: string;
				contact: string;
			};
		};
		social: string;
		address: string;
		newsletter: string;
	}

	const { language, translations } = $props<{
		language: Language;
		translations: FooterTranslations;
	}>();

	type NavigationItem = {
		href: string;
		target: string;
		label: string;
	};

	type MenuSection = {
		id: 'navigation' | 'social';
		title: string;
		items: NavigationItem[];
	};

	type ContactFormValues = {
		email: string;
	};

	type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

	const menuSections = $derived([
		{
			id: 'navigation' as const,
			title: translations.website.title, // 'Web site' traducido
			items: [
				{
					href: `/${language}/#what-i-do`,
					target: '_self',
					label: translations.website.items.what
				},
				{ href: `/${language}/#who-i-am`, target: '_self', label: translations.website.items.who },
				{
					href: `/${language}/#my-work`,
					target: '_self',
					label: translations.website.items.projects
				},
				{
					href: `/${language}/#contact`,
					target: '_self',
					label: translations.website.items.contact
				}
			]
		},
		{
			id: 'social' as const,
			title: translations.social,
			items: [
				{ href: SOCIAL.DISCORD, target: '_blank', label: 'Discord' },
				{ href: SOCIAL.GITHUB, target: '_blank', label: 'Github' },
				{ href: SOCIAL.LINKEDIN, target: '_blank', label: 'Linkedin' },
				{ href: SOCIAL.WHATSAPP, target: '_blank', label: 'Whatsapp' },
				{ href: SOCIAL.TELEGRAM, target: '_blank', label: 'Telegram' }
			]
		}
	]);

	let activeMenu = $state<'navigation' | 'social' | null>(null);

	let formValues = $state<ContactFormValues>({ email: '' });
	let formErrors = $state<ContactFormErrors>({});
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let isError = $state(false);

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function getEmailError(value: string): string | null {
		if (!value.trim()) return 'Email is required';
		if (!emailPattern.test(value)) return 'Email format is invalid';
		return null;
	}

	function validateEmail(): void {
		const error = getEmailError(formValues.email);
		if (error) {
			formErrors = { email: error };
			return;
		}
		formErrors = {};
	}

	function handleSubmit(event: Event): void {
		event.preventDefault();
	}
</script>

<footer class="border-t border-border px-4">
	<div class="mx-auto container">
		<nav class="pt-8 flex flex-col xl:py-8 xl:flex-row xl:items-start">
			<header class="flex items-center justify-between xl:w-1/3">
				<a href="/#" class="text-4xl font-semibold">Tomás Sorgetti</a>
			</header>

			<div class="mt-8 flex flex-col gap-8 xl:mt-0 xl:w-2/3 xl:flex-row xl:justify-between">
				{#each menuSections as section (section.id)}
					<section class="hidden xl:block">
						<h2 class="font-semibold text-xl">{section.title}</h2>
						<ul class="mt-3 space-y-1">
							{#each section.items as link (link.href)}
								<li>
									<a
										href={link.href}
										target={link.target}
										class="text-md text-font-secondary hover:text-font-primary"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</section>
				{/each}

				<section class="">
					<h2 class="font-semibold text-xl">{translations.address}</h2>
					<address class="not-italic mt-3 space-y-1">
						<p class="text-md text-font-secondary">{SOCIAL.ADDRESS}</p>
						<p class="text-md text-font-secondary">{SOCIAL.GMAIL}</p>
						<p class="text-md text-font-secondary">{SOCIAL.PHONE}</p>
					</address>
				</section>

				<form class="hidden md:block w-full max-w-90 lg:w-70" onsubmit={handleSubmit}>
					<h2 class="font-semibold text-xl">{translations.newsletter}</h2>

					<CustomInput
						type="email"
						containerClass="mt-3"
						id="footer-newsletter-email"
						label="Email"
						hasLabel={false}
						placeholder="Your email..."
						name="email"
						bind:value={formValues.email}
						error={formErrors.email}
						required
						on:blur={validateEmail}
						size="sm"
						errorClass="right-0 -top-8"
					/>

					<FormButton
						type="submit"
						containerClass="mt-2"
						disabled
						isLoading={isSubmitting}
						{isSuccess}
						{isError}
						size="sm"
					>
						Subscribe to newsletter
					</FormButton>
				</form>
			</div>

			<div class="mt-8 xl:hidden">
				{#if activeMenu === null}
					<ul class="">
						{#each menuSections as section (section.id)}
							<li>
								<button
									type="button"
									class="w-full text-left font-semibold text-base border-t border-border py-4 flex items-center justify-between"
									aria-haspopup="true"
									onclick={() => (activeMenu = section.id)}
								>
									{section.title}
									<ArrowRight />
								</button>
							</li>
						{/each}
					</ul>
				{:else}
					{#each menuSections.filter((s) => s.id === activeMenu) as section (section.id)}
						<div>
							<button
								type="button"
								class="mb-4 text-md text-font-secondary"
								onclick={() => (activeMenu = null)}
							>
								Back
							</button>

							<h2 class="font-semibold text-xl">{section.title}</h2>

							<ul class="mt-3 space-y-1">
								{#each section.items as link (link.href)}
									<li>
										<a href={link.href} class="text-md text-font-secondary hover:text-font-primary">
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				{/if}
			</div>
		</nav>

		<div class="py-2 border-t border-border text-center">
			<small class="text-font-secondary">
				&copy; {new Date().getFullYear()} Tomas Sorgetti - All rights reserved
			</small>
		</div>
	</div>
</footer>
