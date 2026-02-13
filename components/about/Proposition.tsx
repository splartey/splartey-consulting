import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { propositionContent } from "@/constants";
import { BlurFade } from "@/components/ui/blur-fade";
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";

export default function Proposition() {
    const { tagline, heading, intro, subheading, details, image, ctaButton } = propositionContent;

    return (
        <section className="relative bg-linear-to-b bg-green-100 via-white to-green-50">
            <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-8 space-y-16 py-20 lg:py-24">
                <StripeBgGuides columnCount={2} contained={true} />
                <div className="flex flex-col justify-start items-start gap-8">
                    <div className="max-w-4xl">
                        <BlurFade delay={0.25 * 4} inView >
                            <span className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
                                {tagline}
                            </span>
                        </BlurFade>
                        <BlurFade delay={0.25 * 4} inView >
                            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-gray-900 leading-tight">
                                {heading}
                            </h1>
                        </BlurFade>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <div className="flex flex-col justify-start">
                        <BlurFade delay={0.25 * 4} inView >
                            <p className="text-gray-700 text-lg tracking-tight mb-10">
                                {intro}
                            </p>
                        </BlurFade>

                        <>
                            <BlurFade delay={0.25 * 4} inView >
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    {subheading}
                                </h2>
                            </BlurFade>
                            <article className="space-y-6 mb-12">
                                {details.map((paragraph, index) => (
                                    <BlurFade key={index} delay={0.25 * (index + 5)} inView >
                                        <p className="text-gray-700 text-lg tracking-tighter text-balance">
                                            {paragraph}
                                        </p>
                                    </BlurFade>
                                ))}
                            </article>

                            <BlurFade delay={0.25 * (details.length + 6)} inView >
                                <div className="hidden lg:block">
                                    <Button asChild size="lg" className="btn-primary text-lg w-full rounded-full">
                                        <Link href="/contact">
                                            {ctaButton}
                                        </Link>
                                    </Button>
                                </div>
                            </BlurFade>

                        </>
                    </div>

                    <BlurFade delay={0.25 * 4} inView >
                        <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl outline outline-offset-4 outline-accent-foreground/20">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </BlurFade>
                </div>

                <BlurFade delay={0.25 * 4} inView >
                    <div className="lg:hidden flex justify-center pt-8">
                        <Button
                            asChild
                            size="lg"
                            className="btn-primary w-full sm:w-auto">
                            <Link href="/contact">{ctaButton}</Link>
                        </Button>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}