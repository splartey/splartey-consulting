
import Hero from "@/components/home/Hero";
import HeroMarquee from "@/components/home/HeroMarquee";
import ImpactSection from "@/components/home/Impact";
import { skills, impactContent, heroData } from "@/constants";

export default function HomePage() {
  return (
    <>
      <Hero {...heroData} />
      <HeroMarquee iconUrl="/images/decors/decor.svg" items={skills} />
      <ImpactSection {...impactContent} />
    </>
  );
}
