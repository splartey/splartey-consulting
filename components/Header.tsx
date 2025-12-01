"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavSheet } from "@/components/NavSheet";
import { navLinks } from "@/constants";

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="header">
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full">

                <div className="nav-logo">
                    <Link
                        href="/"
                        className="text-lg md:text-2xl font-bold text-primary tracking-wide"
                    >
                        <span className="hidden md:inline">SP Lartey Consulting.</span>
                        <span className="md:hidden">SP Lartey.</span>
                    </Link>
                </div>

                <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-gray-700 hover:text-primary transition-colors text-sm font-medium tracking-wide ${isActive
                                    ? "text-primary underline-offset-8 underline"
                                    : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:flex justify-end">
                    <Button
                        asChild
                        className="btn-primary px-6 text-sm"
                        size="lg"
                    >
                        <Link href="/contact">Get in touch</Link>
                    </Button>
                </div>

                <div className="lg:hidden flex items-center ml-4">
                    <NavSheet />
                </div>
            </div>
        </nav>
    );
}
