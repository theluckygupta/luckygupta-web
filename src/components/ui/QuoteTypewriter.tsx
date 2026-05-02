'use client';

import { useEffect, useState } from 'react';

type Props = {
    quotes: string[];
    interval?: number;
};

export function QuoteTypewriter({ quotes, interval = 3500 }: Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, interval);

        return () => clearInterval(id);
    }, [quotes.length, interval]);

    return <span>{quotes[index]}</span>;
}
