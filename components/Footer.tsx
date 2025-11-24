"use client";

import Link from "next/link";
import { footerContent } from "@/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Footer">
            <div className="footer-top">
                <div className="footer-top-container">
                    <div className="col-span-full md:col-span-2 xl:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">
                                SP Lartey Consulting.
                            </span>
                        </Link>

                        <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-sm">
                            Strategy, Performance, Leadership
                        </p>
                    </div>

                    {footerContent.map(({ title, links }) => (
                        <div
                            key={title}
                            className="col-span-1 min-w-[120px] space-y-4"
                        >
                            <h6 className="font-semibold text-gray-900 uppercase tracking-wide text-sm">
                                {title}
                            </h6>

                            <ul className="space-y-3">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link href={href} className="footer-link">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <div className="max-w-7xl w-full mx-auto text-center sm:text-left">
                    <span>
                        &copy; {currentYear}{" "}
                        <Link
                            href="/"
                            className="hover:underline underline-offset-4 font-medium"
                        >
                            SP Lartey Consulting
                        </Link>
                        . All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
