import Image from "next/image";

interface FounderProps {
    title: string;
    image: string;
    alt: string;
    paragraphs: string[];
}

export default function Founder({ title, image, alt, paragraphs }: FounderProps) {

    return (
        <section className="py-20 lg:py-28 bg-[#f0efea]">
            <article className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        {title}
                    </h2>

                    <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

            </article>
        </section>
    );
}
