import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    pixelBasedPreset,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

const BRAND_COLOR = "#014d4e";
const ACCENT_COLOR = "#0d9488";

interface ConfirmationEmailProps {
    firstName: string;
}

export const ConfirmationEmail = ({ firstName }: ConfirmationEmailProps) => {
    const previewText = `Thanks for contacting SP Lartey Consulting!`;

    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            colors: {
                                brand: BRAND_COLOR,
                                accent: ACCENT_COLOR,
                                dark: "#0f172a",
                            },
                        },
                    },
                }}
            >
                <Body className="mx-auto my-auto bg-[#f6f6f6] px-2 font-sans">
                    <Preview>{previewText}</Preview>

                    <Container className="mx-auto my-10 max-w-[500px] rounded-3xl border border-[#eaeaea] border-solid bg-white p-5 shadow-lg">

                        <Section className="bg-brand py-4 px-6 rounded-2xl">
                            <Heading className="text-white text-xl font-semibold text-center tracking-tight m-0">
                                Submission Received - SP Lartey Consulting
                                
                            </Heading>
                        </Section>

                        <Section className="px-6 py-5 space-y-4">
                            <Text className="text-[16px] text-dark leading-6 font-semibold">
                                Hi {firstName},
                            </Text>

                            <Text className="text-[15px] text-dark leading-6">
                                Thank you for reaching out to SP Lartey Consulting. Your message has been successfully received!
                            </Text>

                            <Text className="text-[15px] text-dark leading-6">
                                **Seth will review your inquiry and get back to you with in 2 - 3 days from now.** We appreciate your patience and look forward to speaking with you.
                            </Text>

                            <Text className="text-[15px] text-dark leading-6">
                                Best regards,
                                <br />
                                Seth Lartey.
                            </Text>

                        </Section>

                        <Hr className="mx-0 my-[26px] w-full border border-gray-200 border-solid" />

                        <Section className="pt-0 px-0 text-center">
                            <Img
                                className="max-w-full mx-auto block"
                                width={500}
                                src="https://i.ibb.co/LdLDnsjW/email-footer.png"
                                alt="Email footer decoration"
                            />
                        </Section>

                        <Section className="px-6 py-4">
                            <Text className="text-[#666666] text-[12px] leading-5 text-center m-0">
                                This is an automated confirmation email. Please do not reply to this message.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ConfirmationEmail;

