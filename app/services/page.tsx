import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/constants";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <section className="relative w-full px-6 md:px-8 py-20 overflow-hidden">

            <div className="pointer-events-none absolute top-0 right-0 -mt-10 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/line.svg"
                    alt="decorative shape"
                    width={400}
                    height={400}
                    className="w-[250px] md:w-[350px] lg:w-[420px]"
                />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/line.svg"
                    alt="decorative shape"
                    width={400}
                    height={400}
                    className="w-[250px] md:w-[350px] lg:w-[420px]"
                />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="mb-6 md:mb-12 ">
                    <p className="text-sm text-primary font-medium">What we do</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
                        Our Services
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            items={service.items}
                            bgColor={service.bgColor}
                            borderColor={service.borderColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
