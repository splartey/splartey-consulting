export default function ImpactSection({ title, description1, description2, }: ImpactSectionProps) {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 lg:px-8">
                <div className="flex flex-col justify-start">
                    <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-[1.15] tracking-tight">
                        {title}
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {description1}
                    </p>

                    {description2 && (
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            {description2}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
