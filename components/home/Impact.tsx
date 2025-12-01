import { Globe } from "@/components/ui/globe";
import { BlurFade } from "../ui/blur-fade";

export default function ImpactSection({ title, description1, description2, }: ImpactSectionProps) {
    return (
        <section className="min-h-screen max-md:mt-6 flex items-center justify-center">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-10 lg:px-8">
                <div className="flex flex-col justify-center space-y-6">
                    <BlurFade delay={0.25 * 2} inView>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.3] text-primary line wrap-break-word">
                            {title}
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.25 * 3} inView>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed wrap-break-word">
                            {description1}
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.25 * 3} inView>
                        {description2 && (
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed wrap-break-word">
                                {description2}
                            </p>
                        )}
                    </BlurFade>
                </div>

                <BlurFade delay={0.25 * 5} inView>
                    <div className="relative flex items-center justify-center">
                        <div className=" relative w-full max-w-sm aspect-square sm:max-w-md *:md:max-w-xl flex items-center justify-center overflow-hidden rounded-3xl p-2 ">
                            <Globe className="w-full h-full" />
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
