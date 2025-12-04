import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AboutHero({
  illustrationLeft,
  illustrationRight,
  headLine,
  description1,
  description2,
}: AboutHeroProps) {
  return (
    <section className="relative w-full bg-primary overflow-hidden pt-24 md:pt-32 pb-20 md:pb-20 text-white min-h-screen">
      <>
        <div className="pointer-events-none select-none absolute -top-30 -left-10 w-44 opacity-60 sm:-top-40 sm:-left-16 sm:w-56 md:-top-56 md:-left-20 md:w-80">
          <Image
            src={illustrationLeft}
            alt=""
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="pointer-events-none select-none absolute -top-30 -right-10 w-44 opacity-50 sm:-top-28 sm:-right-10 sm:w-56 md:-top-48 md:-right-10 md:w-80">
          <Image
            src={illustrationRight}
            alt=""
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </>

      <article className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <BlurFade delay={0.25 * 4} inView >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            {headLine}
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <BlurFade delay={0.25 * 4} inView >
            <p className="text-gray-300 text-base md:text-xl leading-relaxed">
              {description1}
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView >
            <p className="text-gray-300 text-base md:text-xl leading-relaxed">
              {description2}
            </p>
          </BlurFade>
        </div>

      </article>
    </section>
  );
}
