import { Globe } from "@/components/ui/globe";
import { BlurFade } from "@/components/ui/blur-fade";
import { ImpactSectionProps } from "@/types";

export default function ImpactSection({ title,
    description1,
    description2
}: ImpactSectionProps) {
    return (
        <section className="relative bg-primary/2 flex items-center py-16 md:py-24">

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6 w-full">
                <article className="flex flex-col justify-center space-y-6 md:space-y-8 text-left md:col-span-2 lg:col-span-1">
                    <BlurFade delay={0.25 * 2} inView>
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight text-primary wrap-break-word text-balance">
                            {title}
                        </h2>
                    </BlurFade>

                    <div className="text-lg tracking-tighter text-foreground space-y-4">
                        <BlurFade delay={0.25 * 3} inView>
                            <article>
                                {description1}
                            </article>
                        </BlurFade>

                        {description2 && (
                            <BlurFade delay={0.25 * 4} inView>
                                <article>
                                    {description2}
                                </article>
                            </BlurFade>
                        )}
                    </div>
                </article>

                <BlurFade delay={0.25 * 5} inView>
                    <div className="relative items-center justify-center flex md:hidden lg:flex lg:col-span-1 bg-gray-100">
                        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                            <Globe className="w-full h-full" />
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}