"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel";

import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryCarouselProps {
    index: number;
    setIndex: (i: number) => void;
    carouselItems: {
        id: string;
        image: string
    }[];
}

export function GalleryCarousel({ index, setIndex, carouselItems }: GalleryCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const totalItems = carouselItems.length;

    useEffect(() => {
        if (api) {
            api.scrollTo(index, true);
        }
    }, [index, api]);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            const newIndex = api.selectedScrollSnap();
            if (newIndex !== index) {
                setIndex(newIndex);
            }
        };

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api, setIndex]);


    return (
        <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
            <Carousel className="w-full h-full" setApi={setApi}>
                <CarouselContent>
                    {carouselItems.map(({ image, id }, idx) => (
                        <CarouselItem
                            key={id}
                            className="w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-90">
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${idx + 1} of ${totalItems}`}
                                    fill
                                    loading={idx < 4 ? "eager" : "lazy"}
                                    className="object-contain object-center"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="text-primary left-4 md:left-0" disabled={index === 0} />
                <CarouselNext className="text-primary right-4 md:right-0" disabled={index === totalItems - 1} />
            </Carousel>
        </div>

    );
}