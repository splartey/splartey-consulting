import AwardCard from "../AwardCard";

import { accreditation } from "@/constants";

export default function Accreditation() {
    return (
        <section className="py-20 lg:py-28 bg-primary">
            <article className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Accreditation
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start">
                    {accreditation.map((item) => (
                        <AwardCard key={item.title} {...item} />
                    ))}
                </div>

            </article>
        </section>
    );
}
