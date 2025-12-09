"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ThumbnailsProps {
    index: number;
    setIndex: (i: number) => void;
    carouselItems: { id: string; image: string }[];
}

export function Thumbnails({ index, setIndex, carouselItems }: ThumbnailsProps) {
    const thumbsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!thumbsRef.current) return;

        const active = thumbsRef.current.querySelector(
            `[data-index="${index}"]`
        ) as HTMLElement;

        if (active) {
            active.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [index]);

    const COMMON_CLASSES =
        "relative h-16 w-24 shrink-0 overflow-hidden transition-all duration-300 ease-in-out rounded-none shadow-md focus:outline-none focus:ring-4 focus:ring-white/80";

    return (
        <div className="w-full h-20 overflow-x-auto no-scrollbar">
            <div
                ref={thumbsRef}
                className="flex gap-3 p-2 w-fit mx-auto"
            >
                {carouselItems.map(({ image, id }, idx) => {
                    const isActive = idx === index;

                    const ACTIVE_CLASSES = isActive
                        ? "ring-3 ring-white scale-105 opacity-100"
                        : "opacity-60 hover:opacity-100 hover:scale-[1.03]";

                    return (
                        <button
                            key={id}
                            data-index={idx}
                            onClick={() => setIndex(idx)}
                            aria-current={isActive ? "true" : undefined}
                            className={`${COMMON_CLASSES} ${ACTIVE_CLASSES}`}
                            title={`Show image ${idx + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`Thumbnail for image ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}