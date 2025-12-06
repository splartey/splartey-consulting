import ServiceCard from "@/components/ServiceCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { servicesData } from "@/constants";
import Image from "next/image";

const servicePageDefaults = {
    heading: "Consulting Services",
    subHeading: "What I Offer",
    description: "I provide tailored consulting services designed to strengthen leadership, strategy, and performance for international development organisations around the world.",
};


export default function ServicesPage() {

    const { heading, subHeading, description } = servicePageDefaults

    return (
        < section className="relative w-full px-6 py-8 md:px-10 md:py-16 lg:py-40 overflow-hidden" >
            <>
                <div className="pointer-events-none absolute top-0 right-0 max-sm:-right-10 max-sm:-top-15 opacity-30 md:opacity-40 lg:opacity-60">
                    <Image
                        src="/images/decors/line.svg"
                        alt="decorative shape"
                        loading="eager"
                        width={420}
                        height={420}
                        className="w-[200px] md:w-[300px] lg:w-[420px]" />
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 opacity-30 md:opacity-40 lg:opacity-60 max-sm:hidden">
                    <Image
                        src="/images/decors/line.svg"
                        alt="decorative shape"
                        loading="eager"
                        width={420}
                        height={420}
                        className="w-[200px] md:w-[300px] lg:w-[420px]" />
                </div>
            </>

            <div className="max-w-6xl mx-auto relative">

                <div className="mb-12 max-w-2xl">
                    <BlurFade delay={0.25} inView>
                        <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                            {heading}
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                            {subHeading}
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            {description}
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
        </section >
    );
}
