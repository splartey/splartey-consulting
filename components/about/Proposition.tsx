import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { propositionContent } from "@/constants";

export default function Proposition() {
    const {
        tagline,
        heading,
        intro,
        subheading,
        details,
        image } = propositionContent;

    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 space-y-16">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="max-w-4xl">
                        <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
                            {tagline}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {heading}
                        </h1>
                    </div>
                    <div className="hidden lg:block">
                        <Button asChild size="lg" className="btn-primary">
                            <Link href="/contact">
                                Get started
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            {intro}
                        </p>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {subheading}
                            </h2>
                            <div className="space-y-6">
                                {details.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 text-base leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] lg:h-full min-h-[480px] rounded-3xl overflow-hidden border border-gray-200 shadow-md">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="lg:hidden flex justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="btn-primary w-full sm:w-auto">
                        <Link href="/contact">Get started</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}