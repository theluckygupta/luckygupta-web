'use client';

import Link from 'next/link';

import { QuoteTypewriter } from '@/components/ui/QuoteTypewriter';

const QUOTES_PAGE_URL = '#quotes'; // change later if needed

export function QuoteSection() {
    return (
        <section id="quotes" className="mt-32 w-full">
            <div className="mx-auto w-full max-w-6xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-black dark:text-white">Quotes By Lucky</h2>

                    <Link
                        href={QUOTES_PAGE_URL}
                        className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                    >
                        See all →
                    </Link>
                </div>

                {/* Quote */}
                <div className="max-w-4xl">
                    <div className="text-base font-medium leading-relaxed text-black dark:text-white">
                        <QuoteTypewriter
                            quotes={[
                                'Don’t focus on your haters, Focus on people who love you.',
                                'No weekends for dreams.',
                                'No one cares until they need.',
                                'Do your best and wait for your return.',
                                'Who is with good ideas, Can’t be alone.'
                            ]}
                        />
                    </div>

                    {/* Author (fixed) */}
                    <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">— Lucky Gupta</p>
                </div>
            </div>
        </section>
    );
}
