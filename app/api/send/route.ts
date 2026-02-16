import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Walentynka <onboarding@resend.dev>',
      to: ['zyxatt@gmail.com'],
      subject: 'MAMY TO! ❤️ Żonka powiedziała TAK!',
      html: `
        <div style="font-family: sans-serif; text-align: center; color: #e11d48;">
          <h1>Oficjalne potwierdzenie!</h1>
          <p>Twoja żona właśnie kliknęła TAK na Twojej aplikacji.</p>
          <p>Szykuj kwiaty i dobrą kolację! 🌹</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}