"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

interface SkillsMarqueeProps {
    iconUrl: string;
    items: string[];
}

export default function SkillsMarquee({ iconUrl, items, }: SkillsMarqueeProps) {
    const MarqueeItem = ({ text }: { text: string }) => (
        <div className="flex items-center gap-4 space-x-4">
            <Image
                src={iconUrl}
                width={33}
                height={33}
                alt="skill separator"
                className="object-contain"
            />
            <span className="whitespace-nowrap text-white text-sm md:text-base">
                {text}
            </span>
        </div>
    );

    return (
        <div className="w-full bg-primary md:py-2.5 overflow-hidden">
            <Marquee
                pauseOnHover
                className="[--duration:20s]">
                {items.map((item, index) => (
                    <MarqueeItem
                        key={index}
                        text={item}
                    />
                ))}
            </Marquee>
        </div>
    );
}
