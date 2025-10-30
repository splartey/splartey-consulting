import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import { skills } from "@/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroMarquee
        iconUrl="/decor.svg"
        items={skills}
      />
    </div>
  );
}
