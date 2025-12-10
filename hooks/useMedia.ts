
import { useEffect, useState } from 'react';

export const useMedia = (queries: string[], values: number[], defaultValue: number): number => {

    const get = (): number => {
        if (typeof window === 'undefined') {
            return defaultValue;
        }
        const index = queries.findIndex(q => window.matchMedia(q).matches);
        return values[index] ?? defaultValue;
    };

    const [value, setValue] = useState<number>(get);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handler = () => setValue(get());

        const mediaQueryLists = queries.map(q => window.matchMedia(q));
        mediaQueryLists.forEach(q => q.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(q => q.removeEventListener('change', handler));
    }, [queries, values, defaultValue]);

    return value;
};