import ServiceCard from "@/components/ServiceCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { servicesData, servicePageDefaults } from "@/constants";
import Image from "next/image";

export default function ServicesPage() {

    const { heading, subHeading, description } = servicePageDefaults

    return (
        < section className="relative w-full px-6 py-8 md:px-10 md:py-16 lg:py-40 overflow-hidden " >
            <>
                <div className="pointer-events-none absolute -top-10 -right-10 max-sm:-right-20 max-sm:-top-15 opacity-30 md:opacity-40 lg:opacity-60">
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

            <div className="max-w-6xl max-md:max-w-full mx-auto px-6 md:px-10 lg:px-8 space-y-12 flex flex-col items-center">
                <header className="text-center max-w-3xl space-y-4">
                    <BlurFade delay={0.25} inView>
                        <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                            {subHeading}
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                            {heading}
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                        <p className="text-xl text-muted-foreground">
                            {description}
                        </p>
                    </BlurFade>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                    {servicesData.map((service, index) => (
                        <BlurFade key={index} delay={0.25 * 4} inView>
                            <ServiceCard key={index} {...service} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section >
    );
}
