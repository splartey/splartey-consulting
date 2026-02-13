import { APP_CONFIG, footerLinks } from "@/constants";
import Link from "next/link";
import LinksGroup from "@/components/LinksGroup";

const { COMPANY_NAME, COMPANY_SLOGAN } = APP_CONFIG;

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="grid gap-12 md:grid-cols-[minmax(220px,1fr)_2fr]">

                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary"
                        >
                            {COMPANY_NAME}.
                        </Link>

                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            {COMPANY_SLOGAN}
                        </p>

                    </div>

                    <nav
                        aria-label="Footer navigation"
                        className="grid grid-cols-2 sm:grid-cols-3 gap-8"
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
                        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
                    </p>

                    <Link
                        href="/privacy-policy"
                        className="text-sm hover:underline underline-offset-4"
                    >
                        Privacy Policy & Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}