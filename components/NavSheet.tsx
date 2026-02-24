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
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, APP_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

const { COMPANY_NAME, COMPANY_DESCRIPTION } = APP_CONFIG;

export function NavSheet() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    aria-label="Open menu"
                    className="flex items-center gap-2 cursor-pointer text-lg"
                    variant="ghost"
                >
                    <Image
                        src="/images/icons/menu.svg"
                        alt="Menu icon"
                        width={24}
                        height={24}
                    />
                    <span className="font-medium">Menu</span>
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="px-7 py-8 flex flex-col justify-between border-l border-border w-[350px] overflow-y-auto"
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
                                <SheetClose asChild key={link.label}>
                                    <Link href={link.href}
                                        className={cn(
                                            "group py-4 text-lg font-medium transition-all",
                                            isActive
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-primary"
                                        )}
                                    >
                                        <span className="inline-block font-semibold transition-transform group-hover:translate-x-1">
                                            {link.label}
                                        </span>
                                    </Link>
                                </SheetClose>
                            );
                        })}
                    </nav>
                </div>
                <SheetFooter className="mt-10">
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
