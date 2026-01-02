import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // VALIDATION
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'DevDotCed Contact Form <onboarding@resend.dev>',
      to: ['23-1-00069@vsu.edu.ph'],
      subject: `[Portfolio Contact] ${subject || 'New Message'} - from ${name}`,
      react: EmailTemplate({ 
        name: name, 
        email: email, 
        subject: subject || 'No subject provided',
        message: message 
      }),
      replyTo: email,
      headers: {
        'X-Entity-Ref-ID': `contact-form-${Date.now()}`,
      },
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}