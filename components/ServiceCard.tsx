"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import {
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
} from "@/components/ui/disclosure";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ServiceCardProps } from "@/types";

export default function ServiceCard({
    title,
    serviceList,
    description,
    bgColor,
    borderColor,
}: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [thereIsDescription] = useState(!!description);

    const variants = {
        closed: { opacity: 0, y: -10, filter: 'blur(3px)' },
        open: { opacity: 1, y: 0, filter: 'blur(0px)' },
    };

    const contentVariants = {
        collapsed: { opacity: 0, y: 0 },
        expanded: { opacity: 1, y: 0 },
    };

    return (
        <Card className={cn(
            "relative overflow-hidden rounded-3xl border transition-all p-6 flex flex-col h-full shadow-sm outline outline-border outline-offset-3",
            borderColor,
            bgColor,
        )}>
            <CardHeader className="p-0">
                <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className={cn("p-0 flex-1", isOpen && 'blur-xs')}>
                <ul className="space-y-3">
                    {serviceList.map((service, index) => (
                        <li key={index} className="flex gap-2.5 items-start">
                            <span className="h-6 w-6 shrink-0 mt-1">
                                <Image
                                    src="/images/icons/tick-circle.svg"
                                    width={24}
                                    height={24}
                                    alt="Tick Icon"
                                />
                            </span>
                            <p className="font-medium text-sm text-gray-700">{service}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="p-0 mt-6">
                {thereIsDescription && (
                    <Disclosure
                        onOpenChange={setIsOpen}
                        open={isOpen}
                        className={cn(
                            "absolute bottom-0 left-0 right-0 rounded-t-4xl cursor-pointer px-4 pt-2 transition-all duration-300 ease-in-out",
                            isOpen ? "pb-4 bg-white" : "pb-2",
                            borderColor
                        )}
                        variants={contentVariants}>

                        <DisclosureTrigger>
                            <button className="text-primary font-semibold text-sm flex items-center px-2 p-2 gap-1 hover:underline underline-offset-4 transition-all duration-500 ease-in-out">
                                {isOpen ? (
                                    <>
                                        Hide description <ChevronUp className="h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        View description <ChevronDown className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </DisclosureTrigger>

                        <DisclosureContent >
                            {isOpen && (
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={variants}
                                    transition={{ duration: 0.25 }}
                                    className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed"
                                >
                                    {description}
                                </motion.div>
                            )}
                        </DisclosureContent>
                    </Disclosure>
                )
                }
            </CardFooter>
        </Card>
    );
}
