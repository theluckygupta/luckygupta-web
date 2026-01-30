import '@/lib/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Footer } from '@/components/page-ui/Footer';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://luckygupta.org'),
    title: "Lucky Gupta | Internet Personality",
    description: 'Lucky Gupta is an Internet Personality, Digital Marketer, and Author.',
    applicationName: 'Lucky Gupta',
    keywords: ['Lucky Gupta', 'theluckygupta', 'luckygupta', 'lucky gupta internet celebrity', 'lucky gupta influencer', 'lucky gupta biography', 'lucky gupta age', 'lucky gupta bio', 'lucky gupta wiki', 'lucky gupta wikipedia, lucky gupta girlfriend, lucky gupta youtube, lucky gupta reels, who is lucky gupta'],
    openGraph: {
        siteName: 'Lucky Gupta',
        title: 'Lucky Gupta',
        description: 'Lucky Gupta is an Internet Personality, Digital Marketer, and Author.',
        type: 'website',
        images: ['/opengraph-image.png']
    },
    twitter: {
        card: 'summary_large_image',
        site: '@theluckygupta',
        title: 'Lucky Gupta',
        description: 'Lucky Gupta is an Internet Personality, Digital Marketer, and Author.',
        images: ['/opengraph-image.png']
    },
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/favicon/android-chrome-192x192.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/favicon/android-chrome-512x512.png'
        },
        {
            rel: 'apple-touch-icon',
            url: '/favicon/apple-touch-icon.png'
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon/favicon.ico'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png'
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <Analytics />
                <SpeedInsights />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
