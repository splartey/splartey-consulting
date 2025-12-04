import { Globe } from "@/components/ui/globe";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ImpactSection({ title, description1, description2 }: ImpactSectionProps) {
    return (
        <section className="py-20 md:py-28 lg:py-32">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-10 lg:px-8">

                <div className="flex flex-col justify-center space-y-6">
                    <BlurFade delay={0.25 * 2} inView>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.3] text-primary wrap-break-word">
                            {title}
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.25 * 3} inView>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                            {description1}
                        </p>
                    </BlurFade>

                    {description2 && (
                        <BlurFade delay={0.25 * 4} inView>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                                {description2}
                            </p>
                        </BlurFade>
                    )}
                </div>

                <BlurFade delay={0.25 * 5} inView>
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-sm aspect-square sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center overflow-hidden rounded-3xl p-2">
                            <Globe className="w-full h-full" />
                        </div>
                    </div>
                </BlurFade>

            </div>
        </section>
    );
}
