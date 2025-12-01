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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

export function NavSheet() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition">
                    <IconMenu stroke={2} />
                    <span className="font-medium">Menu</span>
                </button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="px-6 py-8 flex flex-col justify-between border-l border-border"
            >
                <SheetHeader className="space-y-2">
                    <SheetTitle className="text-2xl font-semibold tracking-tight text-primary">
                        SP Lartey Consulting.
                    </SheetTitle>

                    <p className="text-base text-gray-500">
                        Empowering organizations through expert consulting.
                    </p>
                </SheetHeader>

                <div className="ml-6" >
                    <nav className="mt-12 flex flex-col space-y-4" >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg transition-all font-medium py-1 ${isActive
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <SheetFooter className="flex flex-col gap-4 mt-12">
                    <Button size="lg" className="w-full btn-primary" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>

                    <SheetClose asChild>
                        <Button
                            variant="outline"
                            className="w-full border-border hover:bg-muted/50"
                        >
                            Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
