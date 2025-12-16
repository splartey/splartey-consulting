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
} from "@react-email/components";

const BRAND_COLOR = "#014d4e";
const ACCENT_COLOR = "#0d9488";

interface ConfirmationEmailProps {
    firstName: string;
}

export const ConfirmationEmail = ({ firstName }: ConfirmationEmailProps) => {
    const previewText = "Thank you for contacting SP Lartey Consulting";

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>

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
                    <Container className="mx-auto my-10 max-w-[520px] bg-white border border-gray-200 shadow-sm">

                        {/* Header */}
                        <Section className="bg-brand px-6 py-4">
                            <Heading className="m-0 text-center text-xl font-semibold tracking-tight text-white">
                                Thank You for Getting in Touch
                            </Heading>
                        </Section>

                        {/* Content */}
                        <Section className="px-6 py-6 space-y-4">
                            <Text className="m-0 text-[16px] font-semibold text-dark">
                                Hi {firstName},
                            </Text>

                            <Text className="m-0 text-[15px] leading-6 text-dark">
                                Thank you for contacting SP Lartey Consulting. Your message has
                                been received successfully.
                            </Text>

                            <Text className="m-0 text-[15px] leading-6 text-dark">
                                Seth will review your inquiry and respond within
                                <strong> 2–3 business days</strong>. We appreciate your patience
                                and look forward to connecting with you.
                            </Text>

                            <Text className="m-0 text-[15px] leading-6 text-dark">
                                Kind regards,
                                <br />
                                <strong>Seth Lartey</strong>
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-0" />

                        <Section className="px-6 py-4">
                            <Text className="m-0 text-center text-[12px] leading-5 text-gray-500">
                                This email confirms receipt of your inquiry via
                                <br />
                                <strong>splarteyconsulting.com</strong>.
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ConfirmationEmail;
