import Image from "next/image";

import { founderData } from "@/constants";

export default function Founder() {
    const {
        title,
        image,
        alt,
        paragraphs
    } = founderData;

    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                <div className="relative w-full h-[420px] md:h-full min-h-[500px] rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        {title}
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
