"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { LightRays } from "@/components/ui/light-rays";

export default function Hero({
    heading,
    subHeading,
    heroImageUrl,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-16 lg:py-0">

                <div className="my-auto">
                    <BlurFade delay={0.2} inView>
                        <h1 className="max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.15] tracking-[-0.035em] text-primary">
                            {heading}
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.4} inView>
                        <p className="mt-6 max-w-[60ch] text-xl md:text-lg text-foreground/80">
                            {subHeading}
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.6} inView>
                        <div className="mt-12 flex items-center gap-4">
                            <Button size="lg" className="rounded-full text-base" asChild>
                                <Link href={primaryCta.href}>
                                    {primaryCta.label}
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full text-base shadow-none"
                                asChild
                            >
                                <Link href={secondaryCta.href}>
                                    {secondaryCta.label}
                                </Link>
                            </Button>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade delay={0.3} inView>
                    <div className="relative w-full lg:h-[calc(100vh-6rem)] aspect-video lg:aspect-auto rounded-3xl overflow-hidden bg-accent/50">
                        <Image
                            src={heroImageUrl}
                            alt="Hero visual"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </BlurFade>
            </div>

            <LightRays />
        </section>
    );
}
