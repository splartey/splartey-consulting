
import Hero from "@/components/home/Hero";
import HeroMarquee from "@/components/home/HeroMarquee";
import { skills, impactContent, heroData } from "@/constants";

import dynamic from 'next/dynamic';

const DynamicImpactSection = dynamic(() => import("@/components/home/Impact"), {
  loading: () => <div className="h-96 w-full" />,
});

export default function HomePage() {
  return (
    <>
      <Hero {...heroData} />
      <HeroMarquee iconUrl="/images/decors/decor.svg" items={skills} />
      <DynamicImpactSection {...impactContent} />
    </>
  );
}
