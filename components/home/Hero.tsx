'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import SplitText from '@/components/SplitText'
import BlurText from "../BlurText";

import Image from "next/image";
import Link from "next/link";


export default function Hero({
    badgeText,
    heroTitle,
    heroDescription,
    heroImageUrl,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f0efea]">
            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <article className="my-auto">
                    <Badge
                        variant="secondary"
                        className="rounded-full py-1 px-3 border border-gray-300 flex items-center gap-2 w-fit"
                    >
                        <span className="text-sm font-medium">{badgeText}</span>
                        <IconChevronRight stroke={2.5} className="w-4 h-4" />
                    </Badge>

                    <BlurText
                        text={heroTitle}
                        delay={50}
                        animateBy='letters'
                        direction="top"
                        className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2] tracking-tight text-primary"
                    />

                    <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-lg">
                        {heroDescription}
                    </p>

                    <div className="mt-12 flex items-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full text-base px-6 btn-primary">
                            <Link href="/contact">
                                Get Started <ArrowUpRight className="h-5! w-5!" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-base px-6 btn-outline shadow-none rounded-full"
                        >
                            <Link href="/about">About Us</Link>
                        </Button>
                    </div>
                </article>

                <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none overflow-hidden bg-accent shadow">
                    <Image
                        src={heroImageUrl}
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}
