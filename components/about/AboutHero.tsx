import Image from "next/image";

export default function AboutHero({
  illustrationLeft,
  illustrationRight,
  title,
  description1,
  description2 }: AboutHeroProps) {
  return (
    <section className="relative w-full bg-primary overflow-hidden pt-20 md:pt-32 pb-16 md:pb-20">
      <div className="pointer-events-none select-none absolute -top-20 -left-10 w-40 opacity-60 sm:-top-40 sm:-left-16 sm:w-56 md:-top-60 md:-left-20 md:w-80">
        <Image
          src={illustrationLeft}
          alt=""
          width={300}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="pointer-events-none select-none absolute -top-12 -right-8 w-40 opacity-50 sm:-top-24 sm:-right-10 sm:w-56 md:-top-40 md:-right-10 md:w-80">
        <Image
          src={illustrationRight}
          alt=""
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      <article className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-10 text-white">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {title}
          </h2>
          
          <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-300">
            {description1}
          </p>
        </div>

        <div>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-300">
            {description2}
          </p>
        </div>
      </article>
    </section>
  );
}
