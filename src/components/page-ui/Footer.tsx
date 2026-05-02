'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span>
                    Made with <span className="text-red-500">❤️</span> By{' '}
                    <Link href="https://projects.luckygupta.org" target="_blank" className="font-medium text-black hover:underline dark:text-white">
                        Lucky Gupta Projects
                    </Link>{' '}
                    © 2026
                </span>
            </div>
        </footer>
    );
}
