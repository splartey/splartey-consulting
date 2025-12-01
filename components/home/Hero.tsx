import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import { LightRays } from "@/components/ui/light-rays";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import Link from "next/link";


export default function Hero({ badgeText, heroTitle, heroDescription, heroImageUrl, }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-20 lg:py-0 ">
                <article className="relative my-auto">
                    <div className="relative z-10">
                        <BlurFade delay={0.25} inView>
                            <Badge
                                variant="outline"
                                className="rounded-full py-1 px-3 border border-gray-300 flex items-center gap-2 w-fit">
                                <span className="text-sm font-medium">{badgeText}</span>
                                <IconChevronRight stroke={2.5} className="w-4 h-4" />
                            </Badge>
                        </BlurFade>

                        <BlurFade delay={0.25 * 2} inView>
                            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-wide wrap-break-word max-w-[20ch] leading-[1.3] text-primary"
                            >
                                {heroTitle}
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.25 * 3} inView>
                            <article className="mt-6 text-gray-800 text-lg md:text-xl leading-relaxed wrap-break-word max-w-xl">
                                {heroDescription}
                            </article>
                        </BlurFade>

                        <BlurFade delay={0.25 * 4} inView >
                            <div className="mt-12 flex items-center gap-4">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="text-base px-6 btn-outline shadow-none rounded-full"
                                >
                                    
                                    <Link href="/about">Learn more</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="btn-primary rounded-full text-base px-6 shadow-none"
                                >
                                    <Link href="/contact">
                                        Reach out <ArrowUpRight className="h-5! w-5!" />
                                    </Link>
                                </Button>
                            </div>
                        </BlurFade>
                    </div>
                </article>

                <BlurFade delay={0.25 * 3} inView >
                    <div className="relative w-full aspect-video lg:aspect-auto lg:w-[1000] lg:h-screen rounded-xl lg:rounded-none overflow-hidden bg-accent shadow">
                        <Image
                            src={heroImageUrl}
                            alt="Photo of Seth Lartey doing a presentation"
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
