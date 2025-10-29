"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

export function NavSheet() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <IconMenu stroke={2} />
                    <span>Menu</span>
                </div>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="px-4 sm:px-6 py-6 flex flex-col justify-between"
            >
                <SheetHeader className="flex items-center space-x-3">
                    <SheetTitle className="flex items-center space-x-3">
                        <Image
                            src="/logo.svg"
                            alt="SPLartey Logo"
                            width={34}
                            height={34}
                            priority
                        />
                        <span className="text-lg sm:text-xl font-semibold text-primary">
                            SPLartey Consulting.
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col mt-10 space-y-6 text-base sm:text-lg">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors ${isActive
                                    ? "text-primary font-semibold"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <SheetFooter className="flex flex-col gap-3 mt-10">
                    <Button asChild size="lg" className="w-full">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full">
                            Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
