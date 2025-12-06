import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";

export default function AboutHero({
  headLine,
  description1,
  description2,
}: AboutHeroProps) {
  return (
    <section className="relative top-0 w-full bg-primary overflow-hidden py-12 text-white">

      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          className="h-full w-full"
          quantity={100}
          ease={80}
          color="#daebe4"
          refresh
        />
      </div>

      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <BlurFade delay={0.25 * 4} inView >
          <h2 className="max-w-[20ch] text-4xl font-bold leading-[1.15] tracking-tight">
            {headLine}
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 text-muted text-balance leading-relaxed text-base">
          <BlurFade delay={0.25 * 5} inView >
            <p>
              {description1}
            </p>
          </BlurFade>

          <BlurFade delay={0.25 * 6} inView >
            <p>
              {description2}
            </p>
          </BlurFade>
        </div>
      </article>

    </section>
  );
}