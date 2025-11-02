import { valueProposition } from "@/constants"
import ValueCard from "@/components/ValuesCard";

export default function ValueSection() {
    return (
        <section
            id="value-section"
            className="relative py-20 bg-primary overflow-hidden"
        >
            <div className="container mx-auto">
                {/* <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-16">
                    Our Core Values
                </h2> */}

                <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
                    {valueProposition.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </section>
    );
}

