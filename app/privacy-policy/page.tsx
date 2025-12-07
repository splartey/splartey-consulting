import { PRIVACY_POLICY_DATA } from "@/constants";
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";
import Link from "next/link";
import { APP_CONFIG } from "@/constants";

export default function PrivacyPage() {
    const {
        COMPANY_NAME: companyName,
        AUTHOR: dataController,
        CONTACT_EMAIL: contactEmail,
    } = APP_CONFIG;

    const {
        effectiveDate,
        contactLocation,
    } = PRIVACY_POLICY_DATA;


    return (
        <section className="w-full bg-white py-24 md:py-32 relative">
            <StripeBgGuides
                columnCount={2}
                contained={true}
            />

            <article className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 space-y-12">
                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tigher">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        <span className="font-bold" >Effective Date:</span> {effectiveDate}
                    </p>
                </header>

                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            1. Introduction and Compliance
                        </h2>
                        <p>
                            <span className="font-bold pr-0.5">{companyName}</span>
                            (referred to as "we," "us," or "our") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy describes how we collect, use, and disclose personal information when you use our website,
                            <Link href="https://splarteyconsulting.com/" className="underline underline-offset-4 text-primary px-0.5 hover:text-primary/80">
                                splarteyconsulting.com
                            </Link>,
                            and interact with our services.
                        </p>
                        <p>
                            We adhere to the <span className="font-bold pr-0.5">General Data Protection Regulation (GDPR)</span> and all applicable UK and international data protection laws regarding the processing of personal data.
                        </p>
                        <p>
                            By using our website, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            2. Information We Collect
                        </h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <span className="font-bold ">Contact Form Data:</span> When you use our contact form, we collect data such as your <span className="font-bold ">Name</span>, <span className="font-bold ">Email Address</span>, and any <span className="font-bold ">Message</span> content you provide.
                            </li>
                            <li>
                                <span className="font-bold ">Usage Data (Cookies & Analytics):</span> We automatically collect information about your access and use of the website through cookies and third-party tools, including <span className="font-bold ">Google Analytics</span>.
                                <ul className="list-circle ml-6 mt-2 space-y-1 text-base">
                                    <li><span className="font-bold ">Google Analytics</span> collects data like your <span className="font-bold ">IP address</span>, browser type, referring/exit pages, and usage patterns. This data is used solely to analyze website traffic and performance to improve the user experience.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            3. Use and Legal Basis for Processing
                        </h2>
                        <p>
                            We use the information we collect for the following purposes, based on the <span className="font-semibold">Legal Basis (GDPR)</span> indicated:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>To <span className="font-bold" >Respond to Inquiries</span> (Legal Basis: <span className="font-semibold">Legitimate Interest</span> in running a consultancy business and responding to potential clients).</li>
                            <li>To <span className="font-bold" >Communicate with you</span> regarding potential consultancy projects (Legal Basis: <span className="font-semibold">Performance of a Contract</span> or taking steps to enter a contract).</li>
                            <li>To <span className="font-bold" >Improve our website</span> and analyze usage trends using Google Analytics (Legal Basis: <span className="font-semibold">Consent</span> for non-essential cookies, or <span className="font-semibold">Legitimate Interest</span> for essential/anonymized data).</li>
                            <li>To <span className="font-bold" >Maintain the Security</span> of our website (Legal Basis: <span className="font-semibold">Legitimate Interest</span>).</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            4. Your Data Protection Rights (GDPR)
                        </h2>
                        <p>
                            Under GDPR, you have the right to request:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <span className="font-bold" >The Right to Access:</span> You have the right to request copies of your personal data.
                            </li>
                            <li>
                                <span className="font-bold" >The Right to Rectification:</span> You have the right to request that we correct any information you believe is inaccurate or incomplete.
                            </li>
                            <li>
                                <span className="font-bold" >The Right to Erasure:</span> You have the right to request that we erase your personal data, under certain conditions.
                            </li>
                            <li>
                                <span className="font-bold" >The Right to Restrict Processing:</span> You have the right to request that we restrict the processing of your personal data, under certain conditions.
                            </li>
                            <li>
                                <span className="font-bold" >The Right to Object to Processing:</span> You have the right to object to our processing of your personal data, under certain conditions.
                            </li>
                        </ul>
                        <p>
                            If you make a request, we have one month to respond to you. Please contact us using the details in Section 6 if you wish to exercise any of these rights.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            5. Sharing and Disclosure
                        </h2>
                        <p>
                            We do <span className="font-bold">not</span> sell, trade, or otherwise transfer your personal information to outside parties. We may disclose your personal information only if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900  pb-2">
                            6. Contact Us
                        </h2>
                        <p>
                            If you have questions or comments about this policy, or if you wish to exercise your data rights, please contact the Data Controller:
                        </p>
                        <p className="font-medium">
                            <span className="font-bold">Data Controller:</span> {dataController}
                            <br />
                            <span className="font-bold">Email:</span> <Link href={`mailto:${contactEmail}`} className="text-primary hover:underline underline-offset-4">{contactEmail}</Link>
                            <br />
                            <span className="font-bold">Location:</span> {contactLocation}
                        </p>
                    </div>

                </div>
            </article>
        </section>
    )
}