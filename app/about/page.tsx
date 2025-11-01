import AboutHero from "@/components/AboutHero";
import Founder from "@/components/Founder";
import Proposition from "@/components/Proposition";
import ValueSection from "@/components/Value";
import { aboutcontent } from "@/constants";

export default function About() {
    return (
        <>
            <AboutHero {...aboutcontent} />
            <Founder />
            <ValueSection />
            <Proposition />
        </>
    );
}