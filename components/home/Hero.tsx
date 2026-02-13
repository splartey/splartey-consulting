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
        <section className="relative flex items-center justify-center py-8 md:py-10">
            <article className="max-w-5xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:py-0">

                <div className="my-auto py-12 lg:py-0">

                    <h1 className="max-sm:text-center max-md:tracking-tight font-semibold text-primary text-4xl md:text-5xl">
                        {heading}
                    </h1>

                    <p className="mt-6 max-sm:text-center text-lg text-foreground/80 max-md:tracking-tight max-md:text-balance">
                        {subHeading}
                    </p>

                    <div className="mt-12 flex gap-4 w-full flex-col sm:flex-row sm:gap-4">
                        <Button
                            size="lg"
                            className="btn-primary text-lg w-full sm:w-auto shadow-none rounded-full"
                            asChild>
                            <Link href={primaryCta.href} aria-label="About Seth Lartey">
                                {primaryCta.label}
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="btn-outline text-lg w-full sm:w-auto shadow-none rounded-full"
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