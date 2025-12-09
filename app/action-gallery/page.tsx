'use client';

import Masonry from "@/components/Masonry";
import { GalleryModal } from "@/components/GalleryModal";
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";
import { useState } from "react";

import { GALLERY_ITEMS } from "@/constants"

export default function GalleryPage() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [startingIndex, setStartingIndex] = useState(0)

    const handleImageClick = (index: number) => {
        setStartingIndex(index);
        setIsModalOpen(true);
    }

    return (
        <section className="w-full bg-primary/4 py-24 md:py-32">
            <article className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 space-y-12">
                <StripeBgGuides columnCount={2} contained={true} />

                <header className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                        Activity Gallery
                    </h1>
                    <p className="text-xl text-muted-foreground md:max-w-4xl mx-auto">
                        A visual snapshot of my work, including leadership training, strategic advisory sessions, public speaking, and capacity building workshops across the international development sector.
                    </p>
                </header>

                <div className="py-6 w-full">
                    <Masonry
                        items={GALLERY_ITEMS}
                        onItemClick={handleImageClick}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.99}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>

                <GalleryModal
                    isOpen={isModalOpen}
                    startIndex={startingIndex}
                    onOpenChange={() => setIsModalOpen(false)}
                />

            </article>

        </section>
    );
}