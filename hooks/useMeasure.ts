import { useLayoutEffect, useRef, useState } from 'react';

export const useMeasure = <T extends HTMLElement>() => {
    
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;


        if (typeof ResizeObserver === 'undefined') {
            console.warn("ResizeObserver not available. Measure hook may not update on resize.");
            return;
        }

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });

        ro.observe(ref.current);

        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};