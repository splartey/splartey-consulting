"use client";

import {
    Dialog,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { GalleryCarousel } from "./GalleryCarousel";
import { Thumbnails } from "./Thumbnails";
import { GALLERY_ITEMS } from "@/constants";

interface GalleryModalProps {
    isOpen: boolean;
    startIndex: number;
    onOpenChange: (open: boolean) => void;
}

export function GalleryModal({ isOpen, startIndex, onOpenChange }: GalleryModalProps) {

    const [index, setIndex] = useState(startIndex);
    useEffect(() => setIndex(startIndex), [startIndex]);

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent
                className="w-full max-w-5xl! max-h-[90vh] rounded-none py-10 flex flex-col items-center justify-center bg-foreground border-none mx-auto text-white"  >

                <DialogTitle className="sr-only">Gallery Viewer</DialogTitle>
                <DialogDescription className="sr-only">Fullscreen gallery</DialogDescription>

                <GalleryCarousel
                    index={index}
                    setIndex={setIndex}
                    carouselItems={GALLERY_ITEMS}
                />

                <DialogFooter className="w-full flex justify-center mt-4">
                    <Thumbnails
                        index={index}
                        setIndex={setIndex}
                        carouselItems={GALLERY_ITEMS}
                    />
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
