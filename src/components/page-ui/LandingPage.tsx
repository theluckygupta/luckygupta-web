'use client';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterLoop } from '@/components/ui/TypewriterLoop';

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />

            {/* Small intro line */}
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-300 sm:text-lg md:text-xl">Hello, I&apos;m</p>

            <TypewriterLoop phrases={['Lucky Gupta', 'Internet Personality', 'Influencer', 'Digital Marketer']} />

            {/* Social Media Icons */}
            <div className="z-30 mt-4 flex items-center gap-5">
                <a
                    href="https://instagram.com/theluckygupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition hover:text-pink-500"
                >
                    <Instagram size={22} />
                </a>
                <a
                    href="https://facebook.com/theluckygupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition hover:text-blue-500"
                >
                    <Facebook size={22} />
                </a>
                <a
                    href="https://twitter.com/theluckygupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition hover:text-sky-500"
                >
                    <Twitter size={22} />
                </a>

                <a
                    href="https://youtube.com/@theluckygupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition hover:text-red-600"
                >
                    <Youtube size={22} />
                </a>
                <a
                    href="https://linkedin.com/in/theluckygupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition hover:text-blue-600"
                >
                    <Linkedin size={22} />
                </a>
            </div>
            <br></br>

            {/* CTA buttons */}
            <div className="z-30 mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link href="#about-me">
                    <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">About Me</Button>
                </Link>
            </div>

            <BackgroundBeams />
        </div>
    );
}
