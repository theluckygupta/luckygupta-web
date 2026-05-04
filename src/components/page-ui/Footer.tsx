'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                <span>
                    Made with <span className="text-red-500">❤️</span> By{' '}
                    <Link
                        href="https://projects.luckygupta.in"
                        target="_blank"
                        className="font-semibold text-black hover:underline dark:text-white"
                    >
                        Lucky Gupta Projects
                    </Link>{' '}
                    © {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}