import ServiceCard from "@/components/ServiceCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { servicesData } from "@/constants";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <section className="relative w-full px-6 py-28 md:px-10 md:py-36 lg:py-40 overflow-hidden">

            <div className="pointer-events-none absolute top-0 right-0 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/images/decors/line.svg"
                    alt="decorative shape"
                    width={420}
                    height={420}
                    className="w-[200px] md:w-[300px] lg:w-[420px]" />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/images/decors/line.svg"
                    alt="decorative shape"
                    width={420}
                    height={420}
                    className="w-[200px] md:w-[300px] lg:w-[420px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">

                <div className="mb-20 text-center md:text-left max-w-2xl">
                    <BlurFade delay={0.25} inView>
                        <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                            What I offer
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                            Consulting Services
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            I provide tailored consulting services designed to strengthen leadership, strategy, and performance for international development organisations around the world.
                        </p>
                    </BlurFade>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
                    {servicesData.map((service, index) => (
                        <BlurFade key={index} delay={0.25 * 4} inView>
                            <ServiceCard
                                key={index}
                                {...service}
                            />
                        </BlurFade>
                    ))}
                </div>


                <div className="mt-24 md:mt-32 lg:mt-40" />
            </div>
        </section>
    );
}
