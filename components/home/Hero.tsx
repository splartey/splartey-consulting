import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";


export default function Hero({
    heading,
    subHeading,
    heroImageUrl,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {

    const imageSizes = `(max-width: 1024px) 100vw, (min-width: 1025px) 640px`;

    return (
        <section className="relative flex items-center justify-center overflow-hidden py-8 md:py-8.5">
            <div className="max-w-5xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:py-0">

                <div className="my-auto py-12 lg:py-0">
                    <h1 className="max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.15] tracking-[-0.035em] text-primary">
                        {heading}
                    </h1>

                    <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
                        {subHeading}
                    </p>

                    <div className="mt-12 flex items-center gap-4 w-full flex-col sm:flex-row sm:gap-4">
                        <Button
                            size="lg"
                            className="btn-primary w-full sm:w-auto shadow-none rounded-full"
                            asChild>
                            <Link href={primaryCta.href}>
                                {primaryCta.label}
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="btn-outline w-full sm:w-auto shadow-none rounded-full"
                            asChild
                        >
                            <Link href={secondaryCta.href}>
                                {secondaryCta.label}
                            </Link>
                        </Button>
                    </div>
                </div>


                <div
                    className="relative w-full aspect-square lg:aspect-auto min-h-[400px] lg:h-[550px] rounded-3xl overflow-hidden bg-accent/50 outline-1 outline-offset-2 outline-border"
                    style={{ minHeight: '400px' }}
                >
                    <Image
                        src={heroImageUrl}
                        alt="Hero visual"
                        fill
                        priority
                        sizes={imageSizes}
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <LightRays />
        </section>
    );
}