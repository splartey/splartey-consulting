import {
    Html,
    Head,
    Body,
    Container,
    Heading,
    Tailwind,
    pixelBasedPreset,
    Section,
    Text,
    Font
} from "@react-email/components"

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function EmailTemplate({ firstName, lastName, email, message }: EmailTemplateProps) {
    return (
        <Html lang="en">
            <Head >
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body style={{ backgroundColor: "#f6f9fc" }} className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container style={{ padding: "20px", backgroundColor: "#fff", borderRadius: 8 }}>
                        <Heading>New Contact Form Submission</Heading>
                        <Section>
                            <Text><strong>Client Name:</strong> {firstName} {lastName}</Text>
                            <Text><strong>Email:</strong> {email}</Text>
                            <Text><strong>Message:</strong></Text>
                            <Text>{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}