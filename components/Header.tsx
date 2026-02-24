"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavSheet } from "@/components/NavSheet";
import { cn } from "@/lib/utils";

interface HeaderProps {
    companyName: string;
    companyAbbr?: string;
    navLinks: {
        label: string;
        href: string;
    }[];
}

export default function Header({ companyName, companyAbbr, navLinks }: HeaderProps) {
    const pathname = usePathname();

    return (
        <header className="nav-header">
            <div className="header-container">
                <div>
                    <Link href="/" className="text-2xl font-bold text-primary">
                        <span className="hidden md:inline">{companyName}</span>
                        <span className="md:hidden">{companyAbbr}</span>
                    </Link>
                </div>

                <nav aria-label="Primary navigation" className="hidden lg:flex flex-1 justify-center items-center gap-8">
                    {navLinks.map((navlink) => {

                        const isActive = pathname === navlink.href;

                        return (
                            <Link key={navlink.label} href={navlink.href}
                                className={cn("text-foreground/80 hover:text-primary font-semibold transition-colors tracking-wide",
                                    isActive && "text-primary underline underline-offset-8"
                                )}>
                                {navlink.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="hidden lg:flex justify-end">
                    <div className="relative">
                        <Button asChild className="btn-primary rounded-full shadow-none">
                            <Link href="/contact">Contact Me</Link>
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
