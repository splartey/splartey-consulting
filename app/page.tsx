import Accreditation from "@/components/home/Accreditation";
import Hero from "@/components/home/Hero";
import HeroMarquee from "@/components/home/HeroMarquee";
import ImpactSection from "@/components/home/Impact";
import { skills, impactContent, heroData } from "@/constants";

export default function HomePage() {
  return (
    <div>
      <Hero {...heroData} />
      <HeroMarquee iconUrl="/decor.svg" items={skills} />
      <ImpactSection {...impactContent} />
      <Accreditation />
    </div>
  );
}
