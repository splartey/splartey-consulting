import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import { HeroSectionProps } from "@/types";

export default function Hero({
    heading,
    subHeading,
    heroImageUrl,
    heroImageAlt,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {

    const imageSizes = `(max-width: 1024px) 100vw, (min-width: 1025px) 640px`;

    return (
        <section className="hero-section">
            <article className="hero-container">
                <div className="my-auto py-12 lg:py-0">
                    <h1 className="text-5xl text-primary font-semibold tracking-wide">
                        {heading}
                    </h1>

                    <p className="mt-6 text-xl text-gray-700">
                        {subHeading}
                    </p>

                    <div className="mt-12 flex gap-4 w-full flex-col sm:flex-row sm:gap-4">
                        <Button
                            size="lg"
                            className="btn-primary w-full sm:w-auto shadow-none rounded-full"
                            asChild>
                            <Link href={primaryCta.href} aria-label="About Seth Lartey">
                                {primaryCta.label}
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto shadow-none rounded-full"
                            asChild
                        >
                            <Link href={secondaryCta.href} aria-label="Reach out to Seth Lartey">
                                {secondaryCta.label}
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative w-full aspect-square lg:aspect-auto min-h-[400px] lg:h-[550px] rounded-3xl overflow-hidden bg-accent/50 outline-1 outline-offset-2 outline-border" style={{ minHeight: '400px' }}>
                    <Image
                        src={heroImageUrl}
                        alt={heroImageAlt}
                        fill
                        priority
                        sizes={imageSizes}
                        className="object-cover object-center"
                    />
                </div>
            </article>
            <LightRays />
        </section>
    );
}