import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { AboutHeroProps } from "@/types";

export default function AboutHero({
  headLine,
  description1,
  description2,
}: AboutHeroProps) {
  return (
    <section className="relative w-full bg-linear-to-t from-green-50 to-green-100  overflow-hidden py-12 md:py-16 text-primary">

      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          className="h-full w-full"
          quantity={100}
          ease={80}
          color="text-primary/20"
          refresh
        />
      </div>

      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <BlurFade delay={0.25 * 4} inView >
          <h1 className="max-w-[20ch] text-4xl font-bold leading-[1.15] tracking-tight">
            {headLine}
          </h1>
        </BlurFade>

        <article className="flex flex-col gap-6 text-lg text-foreground/80 max-md:tracking-tight max-md:text-balance">
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
        </article>
      </article>
    </section>
  );
}