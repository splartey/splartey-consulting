import { APP_CONFIG, footerLinks } from "@/constants";
import Link from "next/link";
import LinksGroup from "@/components/LinksGroup";

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
    companyName: string;
    companySlogan: string;
}

export default function Footer({ companyName, companySlogan }: FooterProps) {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-12 py-3 md:grid-cols-[minmax(220px,1fr)_2fr]">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-primary"
                        >
                            {companyName}.
                        </Link>

                        <p className="footer-link">
                            {companySlogan}
                        </p>
                    </div>

                    <nav
                        aria-label="Footer navigation"
                        className="grid grid-cols-3 sm:grid-cols-3 gap-8"
                    >
                        {footerLinks.map(({ title, links }, index) => (
                            <LinksGroup
                                key={index}
                                title={title}
                                links={links.map((link) => ({
                                    title: link.label,
                                    href: link.href,
                                    icon: link.icon,
                                }))}
                            />
                        ))}
                    </nav>

                </div>
            </div>

            <div className="bg-primary text-white">
                <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-center sm:text-left">
                        &copy; {CURRENT_YEAR} {companyName}. All rights reserved.
                    </p>

                    <Link
                        href="/privacy-policy"
                        className=" hover:underline underline-offset-4"
                    >
                        Privacy Policy & Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}