import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Hr,
    Text,
    Preview,
    Section,
    Tailwind,
    pixelBasedPreset,
    Link,
    Row,
    Img,
} from "@react-email/components";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function EmailTemplate({ firstName, lastName, email, message, }: EmailTemplateProps) {

    const previewText = `New contact form message from ${firstName} ${lastName}`;
    const BRAND_COLOR = "#014d4e";
    const ACCENT_COLOR = "#0d9488";

    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body className="flex items-center justify-center min-h-screen bg-[#f3f4f6] font-sans px-4 py-10">
                    <Preview>{previewText}</Preview>

                    <Container className="bg-white max-w-lg shadow-xl rounded-lg overflow-hidden">

                        <Section className={`bg-[${BRAND_COLOR}] py-4 px-6`}>
                            <Heading className="text-white text-xl font-semibold text-center tracking-tight m-0">
                                SP Lartey Consulting Form Submission
                            </Heading>
                        </Section>

                        <Section className="border border-solid border-black/10 px-6 py-5 space-y-4">

                            <Row>
                                <Text className="text-[15px] leading-6 text-gray-900">
                                    <strong className="font-medium">Name:</strong> {firstName} {lastName}
                                </Text>
                            </Row>

                            <Row>
                                <Text className="text-[15px] leading-6 text-gray-900">
                                    <strong className="font-medium">Email:</strong>{" "}
                                    <Link
                                        href={`mailto:${email}`}
                                        className={`text-[${ACCENT_COLOR}] underline underline-offset-4`}
                                    >
                                        {email}
                                    </Link>
                                </Text>
                            </Row>

                            <Section>
                                <Text className="text-[15px] text-gray-900 font-medium mb-2">
                                    Message:
                                </Text>

                                <Text className="text-[15px] text-gray-700 leading-6 whitespace-pre-wrap p-3 border border-solid border-gray-200 rounded-md bg-gray-50/50">
                                    {message}
                                </Text>
                            </Section>
                        </Section>

                        <Hr className="my-6 border-gray-200" />

                        <Section className="pt-0 px-0 text-center">
                            <Img
                                className="max-w-full mx-auto block"
                                width={620}
                                src="https://i.ibb.co/LdLDnsjW/email-footer.png"
                                alt="Email footer decoration"
                            />
                        </Section>

                        <Section className="px-6 py-4">
                            <Text className="text-[12px] leading-5 text-gray-500 text-center">
                                This email was automatically generated from your website's contact form and delivered via SP Lartey Consulting's backend system.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}