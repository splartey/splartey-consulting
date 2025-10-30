import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/constants";

export default function ServicesPage() {
    return (
        <section className="mx-auto w-full px-6 py-20">
            <div className="max-w-7xl  mx-auto">
                <div className="mb-12">
                    <p className="text-sm text-primary">What we do</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-1 ">
                        Our Services
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index}
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