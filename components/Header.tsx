"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/works" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="py-4 md:py-6 bg-white/5 backdrop-blur-2xl fixed w-full border-b border-gray-200 px-4 md:px-8 z-50">
            <div className="max-w-8xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-3">
                    <Image
                        src="/logo.svg"
                        alt="SPLartey Logo"
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8"
                    />
                    <Link
                        href="/"
                        className="text-lg md:text-2xl font-bold text-primary tracking-tight"
                    >
                        <span className="hidden md:inline">SPLartey Consulting.</span>
                        <span className="md:hidden">SPLartey.</span>
                    </Link>
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center">
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

                <div className="hidden md:flex justify-end">
                    <Button asChild>
                        <Link href="/contact">Get in touch</Link>
                    </Button>
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="w-8 h-8" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-6">
                            <SheetHeader>
                                <SheetTitle className="flex items-center space-x-2">
                                    <Image
                                        src="/logo.svg"
                                        alt="SPLartey Logo"
                                        width={28}
                                        height={28}
                                    />
                                    <span className="text-lg font-semibold text-primary">SPLartey</span>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col mt-8 space-y-6">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-lg transition-colors
                                                 ${isActive ?
                                                    "text-primary font-medium"
                                                    : "text-gray-700"
                                                } hover:text-primary`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
