"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, APP_CONFIG } from "@/constants";

const { COMPANY_NAME, COMPANY_DESCRIPTION } = APP_CONFIG;

export function NavSheet() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    aria-label="Open menu"
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition focus-visible:outline-none"
                >
                    <IconMenu stroke={2} />
                    <span className="font-medium">Menu</span>
                </button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="px-7 py-8 flex flex-col justify-between border-l border-border w-[320px]"
            >
                <SheetHeader className="space-y-2">
                    <SheetTitle className="text-2xl font-bold tracking-tight text-primary">
                        {COMPANY_NAME}
                    </SheetTitle>

                    <SheetDescription className="text-base text-muted-foreground leading-relaxed">
                        {COMPANY_DESCRIPTION}
                    </SheetDescription>
                </SheetHeader>

                <div className="mt-10">
                    <nav className="flex flex-col divide-y divide-border">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <SheetClose asChild key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`group py-4 text-lg font-medium transition-all ${isActive
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-primary"
                                            }`}
                                    >
                                        <span className="inline-block font-semibold transition-transform group-hover:translate-x-1">
                                            {link.name}
                                        </span>
                                    </Link>
                                </SheetClose>
                            );
                        })}
                    </nav>
                </div>

                <SheetFooter className="flex flex-col gap-4 mt-10">
                    <SheetClose asChild>
                        <Button size="lg" className="w-full btn-primary" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
