import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
	try {
		const { email, message } = await request.json();

		await resend.emails.send({
			from: 'Portfolio Contact <contact@tomassorgetti.com.ar>',
			to: ['tomassorgetti456@gmail.com'],
			subject: 'New Message from Portfolio Contact',
			html: `
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message}</p>
			`
		});

		return json({ success: true });
	} catch (error) {
		console.error(error);
		return json({ success: false }, { status: 500 });
	}
}
