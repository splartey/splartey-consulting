"use client";

import { footerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP_CONFIG } from "@/constants";

const { COMPANY_NAME, COMPANY_DESCRIPTION } = APP_CONFIG;

export default function Footer() {

    return (
        <footer className="relative bg-white" aria-label="Footer">
            <div
                className={cn(
                    "mx-auto max-w-7xl lg:border-x",
                    "dark:bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)]"
                )}
            >
                <div className="absolute inset-x-0 h-px w-full bg-border" />

                <div className="grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 p-8 md:py-16">
                    <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-5 max-w-xs">
                        <Link href="/" className="w-max">
                            <span className="text-2xl font-bold text-primary">
                                {COMPANY_NAME}
                            </span>
                        </Link>

                        <p className="max-w-sm text-muted-foreground text-sm">
                            {COMPANY_DESCRIPTION}
                        </p>
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
                            {footerLinks.map(({ label, links }) => (
                                <div key={label} className="flex flex-col">
                                    <h6 className="font-semibold uppercase tracking-wide text-sm text-black">
                                        {label}
                                    </h6>

                                    <ul className="mt-4 space-y-3 text-muted-foreground text-sm">
                                        {links.map(({ title, href }) => (
                                            <li key={title}>
                                                <Link
                                                    href={href}
                                                    className="inline-flex items-center transition-all duration-300 hover:text-foreground"
                                                >
                                                    {title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 px-12 bg-primary">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-2 py-3 px-2 text-white text-sm md:flex-row">
                    <p>
                        &copy; {" "} {new Date().getFullYear()} SP Lartey Consulting - All rights reserved.
                    </p>

                    <Link
                        href="/"
                        className="underline underline-offset-4 hover:text-zinc-300"
                    >
                        Privacy Policy & Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
