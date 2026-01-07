import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

const BRAND_COLOR = "#014d4e";

interface ConfirmationEmailProps {
    firstName: string;
}

export const ConfirmationEmail = ({ firstName }: ConfirmationEmailProps) => {
    const previewText = "Thank you for contacting SP Lartey Consulting";

    return (
        <Html lang="en" dir="ltr">
            <Head />

            <Preview>{previewText}</Preview>

            <Tailwind>
                <Body
                    className="bg-[#f6f6f6] font-sans"
                    style={{
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        margin: 0,
                        padding: "16px",
                        backgroundColor: "#f6f6f6",
                    }}
                >

                    <div style={{ display: "none", lineHeight: "0", fontSize: 0 }}>&zwnj;</div>

                    <Container
                        className="bg-white border border-gray-200 "
                        style={{
                            maxWidth: "520px",
                            margin: "24px auto",
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <Section
                            className="px-6 py-4"
                            style={{ backgroundColor: BRAND_COLOR }}
                        >
                            <Heading
                                className="text-xl font-semibold text-center text-white m-0"
                                style={{
                                    margin: 0,
                                    color: "#ffffff",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                }}
                            >
                                Thank You for Getting in Touch
                            </Heading>
                        </Section>

                        <Section className="px-6 py-6">
                            <Text
                                className="text-[16px] font-semibold text-gray-900 m-0"
                                style={{ fontSize: "16px", marginBottom: "12px" }}
                            >
                                Hello {firstName},
                            </Text>

                            <Text
                                className="text-[15px] leading-6 text-gray-900 m-0"
                                style={{ fontSize: "15px", lineHeight: "22px", marginBottom: "12px" }}
                            >
                                Thank you for contacting SP Lartey Consulting. Your message has
                                been received successfully.
                            </Text>

                            <Text
                                className="text-[15px] leading-6 text-gray-900 m-0"
                                style={{ fontSize: "15px", lineHeight: "22px", marginBottom: "12px" }}
                            >
                                Seth will review your inquiry and respond within
                                <strong> 2-3 business days</strong>. We appreciate your patience
                                and look forward to connecting with you.
                            </Text>

                            <Text
                                className="text-[15px] leading-6 text-gray-900 m-0"
                                style={{ fontSize: "15px", lineHeight: "22px" }}
                            >
                                Kind regards,
                                <br />
                                <strong>Seth Lartey</strong>
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-0" />

                        <Section className="px-6 py-4">
                            <Text
                                className="text-center text-[12px] leading-5 text-gray-500 m-0"
                                style={{ fontSize: "12px", lineHeight: "18px", textAlign: "center" }}
                            >
                                This email confirms receipt of your inquiry submitted via{" "}
                                <br />
                                <a
                                    href="https://www.splarteyconsulting.com"
                                    style={{ color: BRAND_COLOR, textDecoration: "underline" }}
                                >
                                    www.splarteyconsulting.com
                                </a>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ConfirmationEmail;
