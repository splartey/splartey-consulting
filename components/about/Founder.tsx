import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

type FounderProps = {
    image: string;
    alt: string;
    paragraphs: string[];
}

export default function Founder({ image, alt, paragraphs }: FounderProps) {

    return (
        <section className="relative py-20 lg:py-28 bg-[#f5f4f3] min-h-screen  place-content-center">
            <article className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col">
                    <BlurFade delay={0.25} inView >
                        <div className="space-y-5">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 text-base md:text-xl leading-relaxed" >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </BlurFade>
                </div>
                <BlurFade delay={0.25 * 3} inView >
                    <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-gray-200 shadow-md outline outline-offset-2 outline-accent-foreground/20">
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
            </article>
        </section>
    );
}
