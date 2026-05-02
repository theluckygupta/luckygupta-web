import Head from 'next/head'; // SEO-related components

import { AboutMeSection } from '@/components/page-ui/AboutMeSection'; // Only import once
import BooksSection from '@/components/page-ui/BooksSection';
import CompaniesSection from '@/components/page-ui/CompaniesSection';
import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { QuoteSection } from '@/components/page-ui/QuoteSection';
// Consolidated into a single default export
export default function Home() {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Lucky Gupta',
        birthDate: '1998-12-28',
        birthPlace: {
            '@type': 'Place',
            name: 'Samdari, Rajasthan, India'
        },
        occupation: ['Internet Personality', 'Podcaster', 'Author', 'Entrepreneur'],
        sameAs: [
            'https://open.spotify.com/show/7JwcBV32M6rWJFieHHlkfd',
            'https://podcasts.apple.com/us/podcast/lucky-guptas-podcast/id1590334329',
            'https://www.google.co.in/search?q=Lucky+Gupta&tbm=bks'
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData)
                    }}
                />
            </Head>

            <main>
                <LandingPage />
                <AboutMeSection />
                <QuoteSection />
                <BooksSection />
                <CompaniesSection />
                <ContactMeForm />
                <div className="mt-24 flex justify-center"></div>
            </main>
        </>
    );
}
