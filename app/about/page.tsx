import AboutHero from "@/components/about/AboutHero";
import Founder from "@/components/about/Founder";
import Proposition from "@/components/about/Proposition";
import ValueSection from "@/components/about/Value";
import { aboutContent } from "@/constants";
import { founderData } from "@/constants";

export default function About() {
    return (
        <>
            <AboutHero {...aboutContent} />
            <Founder {...founderData} />
            <ValueSection />
            <Proposition />
        </>
    );
}