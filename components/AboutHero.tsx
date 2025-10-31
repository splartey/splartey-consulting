import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-primary overflow-hidden pt-20 md:pt-32 pb-16 md:pb-20">
      <div className="pointer-events-none select-none absolute -top-20 -left-10 w-40 opacity-60 
                      sm:-top-40 sm:-left-16 sm:w-56
                      md:-top-60 md:-left-20 md:w-80">
        <Image
          src="/Looper-3.svg"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="pointer-events-none select-none absolute -top-12 -right-8 w-40 opacity-50
                      sm:-top-24 sm:-right-10 sm:w-56
                      md:-top-40 md:-right-10 md:w-80">
        <Image
          src="/Looper-2.svg"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-10 text-white">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            About us
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            SPLartey Consulting is a specialist management consultancy dedicated
            to strengthening strategy, performance, and leadership across the
            international development sector. We partner with NGOs, INGOs,
            governments, and development organizations to design and implement
            solutions that drive meaningful, measurable change.
          </p>
        </div>

        <div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            Built on years of field-tested experience, SPLartey Consulting blends
            strategic insight with practical execution. Our approach is rooted in
            collaboration, accountability, and innovation, ensuring that every
            engagement leads to sustainable progress. Guided by deep contextual
            understanding, we help organizations align vision with action and
            deliver results that last.
          </p>
        </div>
      </div>
    </section>
  );
}
