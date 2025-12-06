import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { StripeBgGuides } from "../ui/stripe-bg-guides";


export default function Founder({ image, alt, content }: FounderProps) {

    return (
        <section className="relative py-20 lg:py-28 flex items-center  ">
            <article className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <StripeBgGuides
                    columnCount={8}
                    animated={true}
                    animationDuration={8}
                    glowColor="hsl(var(--foreground))"
                    randomize={true}
                    randomInterval={3000}
                    contained={true}
                />
                <>
                    <div className="flex flex-col">
                        <div className="space-y-3">
                            {content.map(({ paragraph }, index) => (
                                <article key={index} className="text-gray-700 text-base xl:text-lg leading-relaxed" >
                                    <BlurFade key={index} delay={0.25} inView >
                                        {paragraph}
                                    </BlurFade>
                                </article>
                            ))}
                        </div>
                    </div>
                    <BlurFade delay={0.25 * 3} inView >
                        <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl outline outline-offset-4 outline-accent-foreground/20">
                            <Image
                                src={image}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </BlurFade>
                </>
            </article>
        </section>
    );
}