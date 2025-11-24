import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/constants";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <section className="relative w-full px-6 py-28 md:px-10 md:py-36 lg:py-40 overflow-hidden">

            <div className="pointer-events-none absolute top-0 right-0 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/line.svg"
                    alt="decorative shape"
                    width={420}
                    height={420}
                    className="w-[200px] md:w-[300px] lg:w-[420px]"
                />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 opacity-30 md:opacity-40 lg:opacity-60">
                <Image
                    src="/line.svg"
                    alt="decorative shape"
                    width={420}
                    height={420}
                    className="w-[200px] md:w-[300px] lg:w-[420px]"
                />
            </div>

            <div className="max-w-7xl mx-auto relative">

                <div className="mb-20 text-center md:text-left max-w-2xl">
                    <p className="text-sm text-primary font-semibold tracking-wide uppercase">
                        What we do
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                        Our Services
                    </h2>

                    <p className="mt-4 text-gray-600 text-base md:text-lg">
                        We provide a range of tailored services designed to elevate
                        performance, strategy, and leadership across organizations.
                    </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-24 md:mt-32 lg:mt-40" />
            </div>
        </section>
    );
}
