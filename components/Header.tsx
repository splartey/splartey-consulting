"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavSheet } from "@/components/NavSheet";
import { navLinks } from "@/constants";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="py-4 lg:py-6 bg-white/10 backdrop-blur-lg fixed w-full border-b border-gray-200 px-4 md:px-8 z-50">
            <div className="max-w-8xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 lg:space-x-3">
                    <Image
                        src="/logo.svg"
                        alt="SPLartey Logo"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                    />
                    <Link
                        href="/"
                        className="text-lg md:text-2xl font-bold text-primary tracking-wide"
                    >
                        <span className="hidden md:inline">SPLartey Consulting.</span>
                        <span className="md:hidden">SPLartey.</span>
                    </Link>
                </div>

                <div>
                    <nav className="hidden lg:flex flex-1 justify-center items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`mx-4 text-gray-700 hover:text-primary transition-colors ${isActive
                                        ? "border-b-2 border-primary text-primary pb-1"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="hidden lg:flex justify-end">
                    <Button asChild>
                        <Link href="/contact">Get in touch</Link>
                    </Button>
                </div>

                <div className="lg:hidden">
                    <NavSheet />
                </div>
            </div>
        </header>
    );
}
