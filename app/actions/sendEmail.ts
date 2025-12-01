
'use server';

import { Resend } from "resend";
import EmailTemplate from '@/components/email/EmailTemplate';

const resend = new Resend(process.env.NEXT_RESEND_API!);

interface SendEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function sendEmail({ firstName, lastName, email, message }: SendEmailProps) {
    try {
        const { data, error } = await resend.emails.send({
            from: "Splartey Consulting <" + process.env.NEXT_RESEND_TEST_DOMAIN + ">",
            to: process.env.NEXT_RESEND_EMAIL_ADDRESS!,
            subject: "New Contact Form Submission",
            react: EmailTemplate({
                firstName,
                lastName,
                email,
                message,
            }),
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        console.error("Error sending email:", err);
        return { success: false, error: err };
    }
}