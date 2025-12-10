
'use server';

import { Resend } from "resend";
import EmailTemplate from '@/emails/EmailTemplate';
import ConfirmationEmail from '@/emails/ConfirmationEmail';

const resend = new Resend(process.env.NEXT_RESEND_API!);

interface SendEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function sendEmail({ firstName, lastName, email, message }: SendEmailProps) {
    try {

        const { data: ownerData, error: ownerError } = await resend.emails.send({
            from: "Splartey Consulting Contact Form <" + process.env.NEXT_RESEND_TEST_DOMAIN + ">",
            to: process.env.NEXT_RESEND_EMAIL_ADDRESS!,
            subject: "New Contact Form Submission",
            replyTo: email,
            react: EmailTemplate({
                firstName,
                lastName,
                email,
                message,
            }),
        });

        if (ownerError) {
            console.error("Resend (Owner) error:", ownerError);
            return { success: false, ownerError };
        }

        const { data: clientData, error: clientError } = await resend.emails.send({
            from: "Seth Lartey - SP Lartey Consulting <" + process.env.NEXT_RESEND_TEST_DOMAIN + ">",
            to: email,
            subject: "We've received your inquiry! (SP Lartey Consulting)",
            replyTo: process.env.NEXT_RESEND_EMAIL_ADDRESS!,
            react: ConfirmationEmail({
                firstName,
            }),
        });

        if (clientError) {
            console.warn("Resend (Client) confirmation failed:", clientError);
            console.error("Resend (Client) error:", clientError);
        }

        return { success: true, ownerData, clientData };

    } catch (err) {
        console.error("Error sending email:", err);
        return { success: false, error: err };
    }
}