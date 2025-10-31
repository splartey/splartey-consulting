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
      <ImpactSection
        title={`Strategic Solutions for Transformative Impact`}
        description1={`We provide bespoke consulting solutions that empower organizations to lead with clarity, strengthen performance, and achieve lasting impact. Our services span strategy development, institutional strengthening, governance, leadership, and program delivery, ensuring that every intervention is both practical and sustainable.`}
        description2={`With a deep understanding of complex development environments across Africa, Asia, and the Caribbean, we bridge global insight with local realities to help partners navigate change effectively. Guided by our core values of equity, accountability, and innovation, we design solutions that translate ambition into measurable results.`}
      />
    </div>
  );
}
