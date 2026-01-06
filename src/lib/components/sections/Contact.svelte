<script lang="ts">
	import CustomInput from '../ui/CustomInput.svelte';
	import FormButton from '../ui/FormButton.svelte';
	import GithubIcon from '../../assets/icons/github.svg';
	import LinkedinIcon from '../../assets/icons/linkedin.svg';
	import DiscordIcon from '../../assets/icons/discord.svg';
	import TelegramIcon from '../../assets/icons/telegram.svg';
	import WhatsappIcon from '../../assets/icons/whatsapp.svg';
	import Background from '../../assets/videos/contact.mp4';

	type FieldErrors = {
		email?: string;
		message?: string;
	};

	let email = '';
	let message = '';
	let errors: FieldErrors = {};
	let isSubmitting = false;

	function validateEmail(value: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	}

	function validateEmailField(): void {
		if (!email.trim()) {
			errors = { ...errors, email: 'Email is required' };
			return;
		}

		if (!validateEmail(email)) {
			errors = { ...errors, email: 'Email format is invalid' };
			return;
		}

		const { email: _removed, ...rest } = errors;
		errors = rest;
	}

	function validateMessageField(): void {
		if (!message.trim()) {
			errors = { ...errors, message: 'Message is required' };
			return;
		}

		if (message.trim().length < 10) {
			errors = { ...errors, message: 'Message must have at least 10 caracters' };
			return;
		}

		const { message: _removed, ...rest } = errors;
		errors = rest;
	}

	function validateForm(): boolean {
		validateEmailField();
		validateMessageField();

		return Object.keys(errors).length === 0;
	}

	function handleSubmit(event: Event): void {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		setTimeout(() => {
			isSubmitting = false;
			email = '';
			message = '';
			errors = {};
		}, 2000);
	}
</script>

<section id="contact" class="relative overflow-hidden py-20 bg-linear-180 from-black to-black/30">
	<div class="mx-auto max-w-5xl flex justify-center gap-12 my-20">
		<div>
			<h2 class="text-4xl font-bold max-w-md">Let’s Build Something That Works</h2>
			<p class="max-w-md text-font-secondary mt-4">
				I’m a junior full stack web developer focused on building clean, functional, and
				user-friendly digital experiences.
			</p>
			<p class="max-w-md text-font-secondary mt-2">
				If you have an idea, a project, or just want to connect, I’d love to hear from you.
			</p>
			<div class="flex items-center justify-start gap-4 mt-4">
				<a href="/#">
					<img src={GithubIcon} alt="" />
				</a>
				<a href="/#">
					<img src={LinkedinIcon} alt="" />
				</a>
				<a href="/#">
					<img src={DiscordIcon} alt="" />
				</a>
				<a href="/#">
					<img src={TelegramIcon} alt="" />
				</a>
				<a href="/#">
					<img src={WhatsappIcon} alt="" />
				</a>
			</div>
			<small class="max-w-md text-font-secondary mt-4 block">
				Open to freelance projects, junior positions, and collaborations.
			</small>
		</div>

		<form
			class="max-w-sm w-full space-y-4"
			novalidate
			aria-describedby="contact-form-errors"
			on:submit={handleSubmit}
		>
			<CustomInput
				type="email"
				id="contact-email"
				label="Email"
				hasLabel={false}
				placeholder="Your email..."
				name="email"
				bind:value={email}
				error={errors.email}
				required
				on:blur={validateEmailField}
			/>

			<CustomInput
				type="textarea"
				id="contact-message"
				label="Message"
				hasLabel={false}
				placeholder="Your message..."
				name="message"
				bind:value={message}
				error={errors.message}
				required
				on:blur={validateMessageField}
			/>

			<FormButton
				type="submit"
				disabled={isSubmitting || Object.keys(errors).length > 0}
				isLoading={isSubmitting}
			>
				Send email
			</FormButton>

			<div id="contact-form-errors" class="sr-only" aria-live="assertive">
				{#each Object.values(errors) as errorMessage}
					<span>{errorMessage}</span>
				{/each}
			</div>
			<small class="text-font-secondary text-center block">
				Or email me directly at <a href="mailto:6YH0e@example.com" class="underline">
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
