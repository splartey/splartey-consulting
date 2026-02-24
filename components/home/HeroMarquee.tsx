"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { SkillsMarqueeProps } from "@/types";

export default function SkillsMarquee({ iconUrl, items, }: SkillsMarqueeProps) {
    const MarqueeItem = ({ text }: { text: string }) => (
        <div className="flex items-center gap-4 space-x-4">
            <Image
                src={iconUrl}
                width={30}
                height={30}
                alt="skill separator"
                className="object-contain"
            />
            <span className="whitespace-nowrap text-white text-lg font-medium">
                {text}
            </span>
        </div>
    );

    return (
        <div className="w-full py-2 bg-primary overflow-hidden">
            <Marquee
                pauseOnHover
                className="[--duration:50s]">
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
