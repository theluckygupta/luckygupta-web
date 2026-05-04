'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-red-500 bg-yellow-200 dark:bg-blue-900 z-50 relative">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 text-sm dark:text-white">
                <span>
                    Made with ❤️ By{' '}
                    <Link
                        href="https://projects.luckygupta.in"
                        target="_blank"
                        className="font-bold underline"
                    >
                        Lucky Gupta Projects
                    </Link>{' '}
                    © {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}