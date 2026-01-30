'use client';

import Image from 'next/image';
import Link from 'next/link';

type Book = {
  title: string;
  year: number;
  image: string;
  appleUrl: string;
};

const AUTHOR_URL =
  'https://books.apple.com/us/author/lucky-gupta/id1525829357';

const books: Book[] = [
  {
    title: 'Once Upon A Digital Time',
    year: 2021,
    image: '/books/book-1.jpg',
    appleUrl: 'https://books.apple.com/us/book/once-upon-a-digital-time/id1579251281',
  },
  {
    title: 'Quotes By Lucky: My Words, Your Story!',
    year: 2020,
    image: '/books/book-2.jpg',
    appleUrl: 'https://books.apple.com/us/book/quotes-by-lucky-my-words-your-story/id1528586653',
  },
  {
    title: 'How I Become A Growth Hacker',
    year: 2020,
    image: '/books/book-3.jpg',
    appleUrl: 'https://books.apple.com/us/book/how-i-become-a-growth-hacker/id1528571399',
  },
  {
    title: 'Lead Generation: From Beginners to Expert',
    year: 2020,
    image: '/books/book-4.jpg',
    appleUrl: 'https://books.apple.com/us/book/lead-generation-from-beginners-to-expert/id1528334550',
  },
  {
    title: 'Affordable Business Development',
    year: 2020,
    image: '/books/book-5.jpg',
    appleUrl: 'https://books.apple.com/us/book/affordable-business-development/id1528226943',
  },
];

export default function BooksSection() {
  return (
    <section id="books" className="mt-32 flex w-full justify-center">
      <div className="w-full max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black dark:text-white">Books</h2>
          <Link
            href={AUTHOR_URL}
            target="_blank"
            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            See all →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
          {books.map((book) => (
            <Link
              key={book.title}
              href={book.appleUrl}
              target="_blank"
              className="group"
            >
              <div className="apple-book transition group-hover:shadow-2xl">
                {/* Background print */}
                <Image
                  src={book.image}
                  alt=""
                  fill
                  className="apple-book-bg"
                  aria-hidden
                />

                {/* Foreground print */}
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="apple-book-fg"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              <div className="mt-3">
                <p className="text-sm font-semibold leading-snug text-black dark:text-white">
                  {book.title}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {book.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
