import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

const BRAND_COLOR = "#014d4e";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({
    firstName,
    lastName,
    email,
    message,
}: EmailTemplateProps) => {
    const previewText = `New contact form message from ${firstName} ${lastName}`;

    return (
        <Html lang="en" dir="ltr">
            <Head />
            <Preview>{previewText}</Preview>

            <Tailwind>
                <Body
                    className="bg-[#f6f6f6]"
                    style={{
                        margin: 0,
                        padding: "16px",
                        backgroundColor: "#f6f6f6",
                        fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                >
                    <div style={{ display: "none", lineHeight: 0, fontSize: 0 }}>
                        &zwnj;
                    </div>

                    <Container
                        className="bg-white border border-gray-200"
                        style={{
                            maxWidth: "520px",
                            margin: "24px auto",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        <Section
                            style={{
                                backgroundColor: BRAND_COLOR,
                                padding: "12px 24px",
                            }}
                        >
                            <Heading
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    color: "#ffffff",
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                    fontWeight: 600,
                                }}
                            >
                                New Contact Form Submission
                            </Heading>
                        </Section>

                        <Section style={{ padding: "20px 24px" }}>
                            <Text
                                style={{
                                    margin: 0,
                                    marginBottom: "12px",
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    color: "#0f172a",
                                }}
                            >
                                A new message has been submitted through your website contact form.
                            </Text>

                            <Hr style={{ borderColor: "#e5e7eb", margin: "12px 0" }} />

                            <Text
                                style={{
                                    margin: 0,
                                    marginBottom: "8px",
                                    fontSize: "15px",
                                    color: "#0f172a",
                                }}
                            >
                                <strong>Full Name: </strong>{firstName} {lastName}
                            </Text>

                            <Text
                                style={{
                                    margin: 0,
                                    marginBottom: "8px",
                                    fontSize: "15px",
                                    color: "#0f172a",
                                }}
                            >
                                <strong>Email: </strong>{" "}
                                <Link
                                    href={`mailto:${email}`}
                                    style={{ color: BRAND_COLOR, textDecoration: "underline" }}
                                >
                                    {email}
                                </Link>
                            </Text>

                            <Text
                                style={{
                                    marginTop: "16px",
                                    marginBottom: "6px",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    color: "#0f172a",
                                }}
                            >
                                Message:
                            </Text>

                            <Text
                                style={{
                                    border: "1px solid #e5e7eb",
                                    backgroundColor: "#f9fafb",
                                    padding: "12px",
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    color: "#111827",
                                }}
                            >
                                {message}
                            </Text>
                        </Section>

                        <Hr style={{ borderColor: "#e5e7eb", margin: 0 }} />

                        <Section style={{ padding: "14px 24px" }}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    margin: 0,
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                    color: "#6b7280",
                                }}
                            >
                                This email was automatically generated from your website contact form.
                                You may reply directly to respond to the sender.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;
