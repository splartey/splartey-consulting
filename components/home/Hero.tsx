import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
    badgeImageUrl,
    badgeText,
    heroTitle,
    heroDescription,
    heroImageUrl
}: HeroSectionProps) {
    return (
        <section className="min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <Badge
                        variant="secondary"
                        className="rounded-full py-1 border border-gray-200 bg-[#F8FEE7] text-primary font-medium flex items-center gap-2 w-fit shadow-sm"
                    >
                        <Image
                            src={badgeImageUrl}
                            alt="Badge Icon"
                            width={20}
                            height={20}
                            className="rounded-full"
                        />
                        {badgeText}
                        <IconChevronRight stroke={3} className="w-4 h-4" />
                    </Badge>

                    <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-primary leading-[1.2] tracking-tight">
                        {heroTitle}
                    </h1>

                    <p className="mt-6 max-w-[60ch] text-base md:text-lg text-foreground/80 leading-relaxed">
                        {heroDescription}
                    </p>

                    <div className="mt-12 flex flex-wrap items-center gap-4">
                        <Button asChild size="lg" className="px-6 btn-primary">
                            <Link href="/works">Explore projects</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="px-6 btn-outline shadow-none"
                        >
                            <Link href="/about">About us</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none overflow-hidden">
                    <Image
                        src={heroImageUrl}
                        alt="SPLartey Workshop"
                        fill
                        className="object-cover object-center brightness-[0.95]"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
