"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navLinks } from "@/constants"

export function NavSheet() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="w-8 h-8" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-2" >
                <SheetHeader>
                    <SheetTitle className="flex items-center space-x-3">
                        <Image
                            src="/logo.svg"
                            alt="SPLartey Logo"
                            width={30}
                            height={30}
                        />
                        <span className="text-lg font-semibold text-primary">SPLartey Consulting.</span>
                    </SheetTitle>
                </SheetHeader>
                <div>
                    <nav className="flex flex-col mt-8 space-y-6 mx-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base transition-colors
                                            ${isActive
                                            ? "text-primary font-semibold"
                                            : "text-gray-700"
                                        }`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <SheetFooter>
                    <Button asChild>
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
