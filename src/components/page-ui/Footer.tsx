'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 text-sm text-neutral-700 dark:text-neutral-300">
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