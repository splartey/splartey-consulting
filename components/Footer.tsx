"use client";

import Link from "next/link";
import { footerContent } from "@/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Footer">
            <div className="footer-top">
                <div className="footer-top-container">
                    <div className="col-span-full md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">
                                SP Lartey Consulting.
                            </span>
                        </Link>

                        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-sm">
                            Independent expertise in international development
                        </p>
                    </div>

                    {footerContent.map(({ title, links }, index) => (
                        <div
                            key={index}
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
                <div className=" max-w-7xl mx-auto flex flex-col items-center justify-between gap-2  py-4 text-white text-sm md:flex-row">
                    <p>
                        &copy; {currentYear} SP Lartey Consulting, All rights reserved.
                    </p>
                    <p >
                        Based in UK and Ghana.
                    </p>
                </div>
            </div>
        </footer>
    );
}
