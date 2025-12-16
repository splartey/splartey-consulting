import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    pixelBasedPreset,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

const BRAND_COLOR = "#014d4e";
const ACCENT_COLOR = "#0d9488";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ firstName, lastName, email, message, }: EmailTemplateProps) => {

    const previewText = `New contact form message from ${firstName} ${lastName}`;

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
                <Body className="mx-auto my-auto bg-[#f6f6f6] font-sans">
                    <Preview>{previewText}</Preview>

                    <Container className="mx-auto my-10 max-w-[500px] border border-[#eaeaea] border-solid bg-white p-5 shadow-lg">

                        <Section className="bg-brand py-4 px-6">
                            <Heading className="text-white text-xl font-semibold text-center tracking-tight m-0">
                                SP Lartey Consulting Form Submission
                            </Heading>
                        </Section>

                        <Section className="px-6 py-5 space-y-4">
                            <Text className="text-[14px] text-dark leading-6">
                                A new contact form submission has been received from your website. Details are below:
                            </Text>

                            <Hr className="mx-0 my-4 w-full border border-gray-200 border-solid" />

                            <Row>
                                <Text className="text-[15px] leading-6 text-dark m-0">
                                    <strong className="font-semibold w-[100px] inline-block">Full Name:</strong> {firstName} {lastName}
                                </Text>
                            </Row>

                            <Row>
                                <Text className="text-[15px] leading-6 text-dark m-0">
                                    <strong className="font-semibold w-[100px] inline-block">Email:</strong>{" "}
                                    <Link
                                        href={`mailto:${email}`}
                                        className="text-accent underline underline-offset-4"
                                    >
                                        {email}
                                    </Link>
                                </Text>
                            </Row>

                            <Section className="mt-6">
                                <Text className="text-[15px] text-dark font-semibold mb-2 m-0">
                                    Message:
                                </Text>

                                <Text className="text-[16px] text-gray-700 leading-6 whitespace-pre-wrap p-3 border border-solid border-gray-200 rounded-none bg-gray-50/50">
                                    {message}
                                </Text>
                            </Section>
                        </Section>

                        <Hr className="mx-0 my-[26px] w-full border border-gray-200 border-solid" />

                        <Section className="px-6 py-4">
                            <Text className="text-[#666666] text-[12px] leading-5 text-center m-0">
                                This email was automatically generated from your website's contact form. Please reply to this email to respond to the sender.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;