"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavSheet } from "@/components/NavSheet";
import { navLinks } from "@/constants";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50">
            <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">

                <div>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-primary"
                    >
                        <span className="hidden md:inline">SP Lartey Consulting.</span>
                        <span className="md:hidden">SP Lartey.</span>
                    </Link>
                </div>

                <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    {navLinks.map((link) => {

                        const isActive = pathname === link.href;
                        const { name, href } = link

                        return (
                            <Link
                                key={name}
                                href={href}
                                className={`text-foreground/80 hover:text-primary transition-colors text-base font-medium tracking-wide
                                    ${isActive && "text-primary underline underline-offset-8"}`}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:flex justify-end">
                    <div className="relative">
                        <Button
                            asChild
                            className="btn-primary"
                            size="default"
                        >
                            <Link href="/contact">Get in touch</Link>
                        </Button>
                    </div>
                </div>

                <div className="lg:hidden flex items-center ml-4">
                    <NavSheet />
                </div>
            </div>
        </header>
    );
}
