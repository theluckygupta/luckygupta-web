'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from '@/components/ui/tracing-beams';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

export function AboutMeSection() {
  return (
    <>
      {/* SEO Schema was removed to page.tsx */}
      <h1
        id="about-me"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        About Me
      </h1>

      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 antialiased">

          {/* INTRO */}
          <Section index={0} title="Lucky Gupta">
            <p>
              <strong>Lucky Gupta</strong> (born 28 December 1998) is an Indian
              internet personality, podcaster, author, and entrepreneur known
              for his work in digital media, podcasting, and online content
              creation.{' '}
              <Ref href="https://community.thriveglobal.com/dont-focus-on-your-haters-focus-on-people-who-loves-you-lucky-gupta/" />
            </p>
          </Section>

          {/* EARLY LIFE */}
          <Section index={1} title="Early life and education">
            <p>
              Lucky Gupta was born on 28 December 1998 in Samdari, a town in
              Barmer district, Rajasthan, India. He completed his early education
              in Samdari.
            </p>
            <p>
              He later moved to Jodhpur, Rajasthan, for higher education. The
              transition from Samdari to Jodhpur played a significant role in
              shaping his exposure to technology, digital media, and content
              creation, which later influenced his professional journey.{' '}
              <Ref href="https://wrytin.com/luckygupta1/story-behind-lucky-gupta-becomes-growth-hacker-kbbvenbo" />
            </p>
          </Section>

          {/* CAREER */}
          <Section index={2} title="Career">
            <p>
              Lucky Gupta began his career by creating digital content and
              gradually established an online presence across multiple
              platforms. His work spans podcasting, writing, and entrepreneurial
              ventures in the digital domain.{' '}
              <Ref href="https://community.thriveglobal.com/dont-focus-on-your-haters-focus-on-people-who-loves-you-lucky-gupta/" />
            </p>
          </Section>

          {/* NOTABLE WORKS */}
          <Section index={3} title="Notable works">
            <h3 className="mt-4 font-semibold">Podcast</h3>
            <p>
              Lucky Gupta is the creator and host of <em>Lucky Gupta’s Podcast</em>,
              a Hindi-language podcast. The podcast has been featured in lists
              of high IMDb-rated podcasts by Indian media outlets.{' '}

              <Ref href="https://www.livehindustan.com/photos/entertainment/top-7-highest-imdb-rating-podcast-from-history-mahabharat-jay-shetty-and-much-more-know-where-to-listen-spotify-6-201736403199384.html" />
              <Ref href="https://zeenews.india.com/hindi/photos/top-7-imdb-highest-rated-podcasts-from-stories-of-mahabharata-to-jay-shetty-podcast-and-lucky-gupta-podcast/2595312" />
            </p>
            <p>
              Available on:{' '}
              <Ref href="https://open.spotify.com/show/7JwcBV32M6rWJFieHHlkfd" label="Spotify" />,{' '}
              <Ref href="https://podcasts.apple.com/us/podcast/lucky-guptas-podcast/id1590334329" label="Apple Podcasts" />
            </p>

            <h3 className="mt-4 font-semibold">Books</h3>
            <p>
              Lucky Gupta has authored books and written works indexed on Google
              Books, covering personal development, digital growth, and
              motivation.{' '}
              <Ref href="https://www.google.co.in/search?q=Lucky+Gupta&tbm=bks" />
            </p>
          </Section>

          {/* QUOTES */}
          <Section index={4} title="Quotes">
            <p>
              Quotes attributed to Lucky Gupta have been published on
              international platforms focusing on motivation and self-belief.{' '}
              <Ref href="https://community.thriveglobal.com/dont-focus-on-your-haters-focus-on-people-who-loves-you-lucky-gupta/" />
            </p>
          </Section>

          {/* COMPANIES */}
          <Section index={5} title="Companies">
            <p>
              Lucky Gupta has been associated with multiple ventures in digital
              media and marketing, collectively referred to as the Lucky Gupta
              Group of Companies.{' '}
              <Ref href="https://medium.com/@jhapriyanka/list-of-lucky-gupta-group-of-companies-beebe4da5523" />
            </p>
          </Section>

          {/* AWARDS */}
          <Section index={6} title="Awards">
            <ul className="list-disc pl-5">
              <li>
                Best Influencer of the Year Award (two-time recipient){' '}
                <Ref href="https://www.issuewire.com/lucky-gupta-two-times-winner-of-the-best-influencer-of-the-year-award-1681815005042541" />
              </li>
              <li>
                YouTube Silver Play Button (100,000+ subscribers){' '}
                <Ref href="https://www.pinterest.com/pin/youtube-silver-button--532621093434975569/" />
              </li>
            </ul>
          </Section>

        </div>
      </TracingBeam>
    </>
  );
}

/* ---------- Helpers ---------- */

function Section({
  title,
  children,
  index
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.section
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className={twMerge('text-xl font-semibold text-black dark:text-white')}>
        {title}
      </h2>
      <div className="mt-2 text-sm text-black dark:text-white">{children}</div>
    </motion.section>
  );
}

function Ref({ href, label = 'ref' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 text-blue-600 underline hover:text-blue-800"
    >
      [{label}]
    </a>
  );
}
