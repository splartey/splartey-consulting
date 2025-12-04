import { APP_CONFIG, footerLinks } from "@/constants";
import Link from "next/link";
import LinksGroup from "@/components/LinksGroup";

const { COMPANY_NAME, COMPANY_DESCRIPTION } = APP_CONFIG;

export default function Footer() {
    return (
        <footer className="relative">
            <div className="mx-auto max-w-5xl lg:border-x dark:bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)]">
                <div className="absolute inset-x-0 h-px w-full bg-border" />

                <div className="relative flex flex-col justify-between gap-8 py-6 px-4 lg:flex-row">
                    <div className="w-full max-w-sm space-y-4">
                        <Link
                            className="w-max text-xl lg:mb-2 font-bold text-primary"
                            href="/"
                        >
                            {COMPANY_NAME}
                        </Link>
                        <p className="max-w-[280px] mt-8 text-muted-foreground text-sm md:mt-0 wrap-break-word">
                            {COMPANY_DESCRIPTION}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {footerLinks.map(({ title, links }) => (
                            <LinksGroup
                                key={title}
                                title={title}
                                links={links.map((link) => ({
                                    title: link.label,
                                    href: link.href,
                                }))}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary text-white py-4 px-3">
                <div className="max-w-5xl px-2.5 mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2">
                    <p className="font-light text-xs text-center sm:text-left">
                        &copy; {new Date().getFullYear()} {COMPANY_NAME}, All rights reserved
                    </p>

                    <Link
                        href="/privacy-policy"
                        className="font-light text-xs text-center sm:text-right"
                    >
                        Privacy Policy & Terms
                    </Link>

                </div>
            </div>
        </footer>
    );
}
