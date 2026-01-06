<script lang="ts">
	import CustomInput from '../ui/CustomInput.svelte';
	import FormButton from '../ui/FormButton.svelte';
	import GithubIcon from '../../assets/icons/github.svg';
	import LinkedinIcon from '../../assets/icons/linkedin.svg';
	import DiscordIcon from '../../assets/icons/discord.svg';
	import TelegramIcon from '../../assets/icons/telegram.svg';
	import WhatsappIcon from '../../assets/icons/whatsapp.svg';
	import Background from '../../assets/videos/contact.mp4';

	type ContactFormValues = {
		email: string;
		message: string;
	};

	type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

	let formValues: ContactFormValues = {
		email: '',
		message: ''
	};

	let formErrors: ContactFormErrors = {};
	let isSubmitting = false;
	let isSuccess = false;
	let isError = false;

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function getEmailError(value: string): string | null {
		if (!value.trim()) return 'Email is required';
		if (!emailPattern.test(value)) return 'Email format is invalid';
		return null;
	}

	function getMessageError(value: string): string | null {
		if (!value.trim()) return 'Message is required';
		if (value.trim().length < 10) return 'Message must have at least 10 characters';
		return null;
	}

	function validateField<K extends keyof ContactFormValues>(field: K): void {
		const value = formValues[field];
		const error = field === 'email' ? getEmailError(value) : getMessageError(value);

		if (error) {
			formErrors = { ...formErrors, [field]: error };
			return;
		}

		const { [field]: _removed, ...rest } = formErrors;
		formErrors = rest;
	}

	function validateForm(): boolean {
		validateField('email');
		validateField('message');
		return Object.keys(formErrors).length === 0;
	}

	async function submitContactForm(): Promise<void> {
		isSubmitting = true;
		isError = false;
		isSuccess = false;

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formValues)
			});

			const result = await response.json();

			if (!response.ok || !result?.success) {
				throw new Error();
			}

			formValues = { email: '', message: '' };
			formErrors = {};
			isSuccess = true;
			setTimeout(() => (isSuccess = false), 3000);
		} catch {
			isError = true;
			setTimeout(() => (isError = false), 3000);
		} finally {
			isSubmitting = false;
		}
	}

	async function handleSubmit(event: Event): Promise<void> {
		event.preventDefault();
		if (!validateForm()) return;
		await submitContactForm();
	}

	function hasErrors(): boolean {
		return Object.keys(formErrors).length > 0;
	}
</script>

<section id="contact" class="relative overflow-hidden py-20 bg-linear-180 from-black to-black/30">
	<div class="mx-auto max-w-5xl flex justify-center gap-12 my-20">
		<article>
			<header>
				<h2 class="text-4xl font-bold max-w-md">Let’s Build Something That Works</h2>
			</header>

			<p class="max-w-md text-font-secondary mt-4">
				I’m a junior full stack web developer focused on building clean, functional, and
				user-friendly digital experiences.
			</p>

			<p class="max-w-md text-font-secondary mt-2">
				If you have an idea, a project, or just want to connect, I’d love to hear from you.
			</p>

			<nav class="flex items-center justify-start gap-4 mt-4" aria-label="Social links">
				<a href="/#" aria-label="GitHub profile">
					<img src={GithubIcon} alt="" />
				</a>
				<a href="/#" aria-label="LinkedIn profile">
					<img src={LinkedinIcon} alt="" />
				</a>
				<a href="/#" aria-label="Discord contact">
					<img src={DiscordIcon} alt="" />
				</a>
				<a href="/#" aria-label="Telegram contact">
					<img src={TelegramIcon} alt="" />
				</a>
				<a href="/#" aria-label="WhatsApp contact">
					<img src={WhatsappIcon} alt="" />
				</a>
			</nav>

			<small class="max-w-md text-font-secondary mt-4 block">
				Open to freelance projects, junior positions, and collaborations.
			</small>
		</article>

		<form
			class="max-w-sm w-full space-y-4"
			novalidate
			aria-describedby="contact-form-status"
			on:submit={handleSubmit}
		>
			<CustomInput
				type="email"
				id="contact-email"
				label="Email"
				hasLabel={false}
				placeholder="Your email..."
				name="email"
				bind:value={formValues.email}
				error={formErrors.email}
				required
				on:blur={() => validateField('email')}
			/>

			<CustomInput
				type="textarea"
				id="contact-message"
				label="Message"
				hasLabel={false}
				placeholder="Your message..."
				name="message"
				bind:value={formValues.message}
				error={formErrors.message}
				required
				on:blur={() => validateField('message')}
			/>

			<FormButton
				type="submit"
				disabled={isSubmitting || hasErrors()}
				isLoading={isSubmitting}
				success={isSuccess}
				error={isError}
			>
				Send email
			</FormButton>

			<div id="contact-form-status" class="sr-only" aria-live="assertive">
				{#each Object.values(formErrors) as errorMessage}
					<span>{errorMessage}</span>
				{/each}
				{#if isSuccess}
					<span>Message sent successfully</span>
				{/if}
				{#if isError}
					<span>There was an error sending the message</span>
				{/if}
			</div>

			<small class="text-font-secondary text-center block">
				Or email me directly at
				<a href="mailto:tomassorgetti456@gmail.com" class="underline">
					tomassorgetti456@gmail.com
				</a>
			</small>
		</form>
	</div>

	<video
		src={Background}
		autoplay
		loop
		muted
		playsinline
		preload="metadata"
		class="absolute top-0 -z-10"
		aria-hidden="true"
	></video>
</section>
