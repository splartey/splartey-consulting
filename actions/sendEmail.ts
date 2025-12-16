'use server';

import { Resend } from "resend";
import EmailTemplate from '@/emails/EmailTemplate';
import ConfirmationEmail from '@/emails/ConfirmationEmail';

const resend = new Resend(process.env.NEXT_RESEND_API!);

if (!process.env.NEXT_RESEND_API) {
    throw new Error("Resend API key not configured");
}

interface SendEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    privacy: boolean;
}

export async function sendEmail({ firstName, lastName, email, message, privacy }: SendEmailProps) {
    try {

        if (!privacy) {
            return { success: false, error: "Privacy consent required" };
        }

        // Email to (owner)
        const { data: ownerData, error: ownerError } = await resend.emails.send({
            from: `SP Lartey Consulting <${process.env.RESEND_FROM_EMAIL}>`,
            to: process.env.RESEND_OWNER_EMAIL!,
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

        // Confirmation Email to (client)
        const { data: clientData, error: clientError } = await resend.emails.send({
            from: `SP Lartey Consulting <${process.env.RESEND_FROM_EMAIL}>`,
            to: email,
            subject: "We've received your inquiry",
            replyTo: process.env.RESEND_OWNER_EMAIL!,
            react: ConfirmationEmail({
                firstName,
            }),
        });

        if (clientError) {
            console.warn("Resend (Client) confirmation failed:", clientError);
        }

        if (process.env.NODE_ENV === "development") {
            console.log("Email sent successfully:", {
                owner: ownerData?.id,
                client: clientData?.id,
            });
        }

        return { success: true };

    } catch (err) {
        console.error("Error sending email:", err);
        return { success: false, error: "Failed to send email" };
    }
}