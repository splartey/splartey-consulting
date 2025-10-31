import { valueProposition } from "@/constants";

import ValuesCard from "@/components/ValuesCard";

export default function ValueSection() {
    return (
        <section id="value-section" className="relative bg-primary py-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center gap-8">
                    {valueProposition.map((value, index) => (
                        <ValuesCard
                            key={index}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}