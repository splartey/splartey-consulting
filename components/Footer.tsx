import { APP_CONFIG, footerLinks } from "@/constants";
import Link from "next/link";
import LinksGroup from "@/components/LinksGroup";
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";

const { COMPANY_NAME, COMPANY_SLOGAN } = APP_CONFIG;

export default function Footer() {
    return (
        <footer className="relative border-t">
            <StripeBgGuides columnCount={2} contained={true} />
            <div className="mx-auto max-w-5xl">
                <div className="relative flex flex-col justify-between gap-8 py-6 md:py-8 px-6 lg:flex-row">

                    <div className="w-full max-w-xs space-y-4">
                        <Link
                            className="w-max text-2xl lg:mb-2 font-bold text-primary"
                            href="/"
                        >
                            {COMPANY_NAME}.
                        </Link>
                        <p className="mt-8 max-sm:mt-4 text-muted-foreground text-lg md:mt-0 wrap-break-word tracking-tighter">
                            {COMPANY_SLOGAN}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3">
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

            <div className="w-full bg-primary text-white py-4 px-3 relative">
                <div className="max-w-5xl px-2.5 mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2">
                    <p className="font-light text-xs text-center sm:text-left">
                        &copy; {new Date().getFullYear()} {COMPANY_NAME}, All rights reserved
                    </p>

                    <Link
                        href="/privacy-policy"
                        className="font-light text-xs text-center sm:text-right hover:underline underline-offset-4"
                    >
                        Privacy Policy & Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}