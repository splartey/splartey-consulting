"use client";

import Link from "next/link";
import Image from "next/image";
import { footerContent } from "@/constants"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-container">
                    <div className="col-span-full xl:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.svg"
                                width={36}
                                height={36}
                                alt="SPLartey Consulting Logo"
                                priority
                            />
                            <span className="text-2xl font-bold text-primary">
                                SPLartey Consulting.
                            </span>
                        </Link>
                        <article className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Strategy, Performance, Leadership
                        </article>
                    </div>
                    {footerContent.map(({ title, links }) => (
                        <div key={title}>
                            <h6 className="font-semibold text-gray-900 uppercase tracking-wide text-sm">
                                {title}
                            </h6>
                            <ul className="mt-4 space-y-3">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link
                                            href={href}
                                            className="footer-link"
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

            <div className="footer-bottom">
                <span className="text-center sm:text-left">
                    &copy; {currentYear}{" "}
                    <Link href="/" className="hover:underline underline-offset-5  font-medium">
                        SPLartey Consulting
                    </Link>
                    . All rights reserved.
                </span>
            </div>
        </footer>
    );
};
