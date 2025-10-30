import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import ImpactSection from "@/components/Impact";
import { skills } from "@/constants";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HeroMarquee
        iconUrl="/decor.svg"
        items={skills}
      />
      <ImpactSection />
    </div>
  );
}
