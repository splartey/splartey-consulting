'use client';

import {
  useLayoutEffect,
  useMemo,
} from 'react';

import Image from 'next/image';
import { useMedia } from '@/hooks/useMedia';
import { useMeasure } from '@/hooks/useMeasure';
import { cn } from '@/lib/utils';

const MASONRY_GAP = 16;
const COLUMN_BREAKPOINTS = {
  queries: ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
  counts: [5, 4, 3, 2],
  default: 1,
};

interface Item {
  id: string;
  image: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  onItemClick: (index: number) => void;
  itemClass?: string;
}

export default function Masonry({ items, onItemClick, itemClass }: MasonryProps) {

  const columns = useMedia(
    COLUMN_BREAKPOINTS.queries,
    COLUMN_BREAKPOINTS.counts,
    COLUMN_BREAKPOINTS.default
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();

  const { grid, maxHeight } = useMemo<{ grid: GridItem[], maxHeight: number }>(() => {
    if (!width || items.length === 0) return { grid: [], maxHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const totalGaps = (columns - 1) * MASONRY_GAP;
    const columnWidth = (width - totalGaps) / columns;

    const calculatedGrid: GridItem[] = items.map(child => {

      const col = colHeights.indexOf(Math.min(...colHeights));

      const x = col * (columnWidth + MASONRY_GAP);

      const height = child.height / 2;

      const y = colHeights[col];

      colHeights[col] += height + MASONRY_GAP;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxH = Math.max(...colHeights);

    const finalMaxHeight = maxH > 0 ? maxH - MASONRY_GAP : 0;

    return { grid: calculatedGrid, maxHeight: finalMaxHeight };
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `${maxHeight}px`;
    }
  }, [maxHeight, containerRef]);


  return (
    <div
      ref={containerRef}
      className="relative w-full transition-height duration-500 ease-out"
    >
      {grid.map((item, index) => (
        <div
          key={item.id}
          className="absolute box-content cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            width: item.w,
            height: item.h,
            transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
            willChange: 'transform, width, height',
          }}
          onClick={() => onItemClick(index)}
        >

          <div className={
            cn(
              "relative w-full h-full overflow-hidden rounded-lg outline-1 outline-offset-2 outline-border transition-transform duration-300",
              "bg-muted",
              itemClass
            )}>

            <Image
              src={item.image.trim()}
              alt={`Activity Gallery Image ${index + 1}`}
              fill
              sizes={`(max-width: 400px) 90vw,
              (max-width: 600px) ${Math.round(width / 2)}px,
              (max-width: 1000px) ${Math.round(width / 3)}px,
              (max-width: 1500px) ${Math.round(width / 4)}px,
              ${Math.round(width / 5)}px`}

              className="object-cover transition-all duration-300 ease-in-out opacity-100 hover:opacity-95  hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}