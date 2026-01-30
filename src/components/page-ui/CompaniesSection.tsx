'use client';

import Image from 'next/image';
import Link from 'next/link';

type Company = {
  id: number;
  name: string;
  image: string;
  url?: string;
};

const COMPANY_SITE_URL = 'https://luckyguptagroups.com';

const companies: Company[] = [
  { id: 1, name: 'Lucky Gupta Group', image: '/companies/company-1.jpg' },
  { id: 2, name: "Lucky Gupta’s Production", image: '/companies/company-2.jpg' },
  { id: 3, name: 'Lucky Gupta Publications', image: '/companies/company-3.jpg' },
  { id: 4, name: 'Lucky Gupta Consultancy', image: '/companies/company-4.jpg' },
  { id: 5, name: 'Lucky Gupta Marketing Solutions', image: '/companies/company-5.jpg' },
  { id: 6, name: 'Lucky Gupta Securities', image: '/companies/company-6.jpg' },
  { id: 7, name: 'Lucky Gupta Club', image: '/companies/company-7.jpg' },
  { id: 8, name: 'Lucky Gupta Clothing Co.', image: '/companies/company-8.jpg' },
  { id: 9, name: 'Lucky Gupta Logistics', image: '/companies/company-9.jpg' },
  { id: 10, name: 'Lucky Gupta Hospitality', image: '/companies/company-10.jpg' },
  { id: 11, name: 'Lucky Gupta Education Co.', image: '/companies/company-11.jpg' },
  { id: 12, name: 'Lucky Gupta Caterers', image: '/companies/company-12.jpg' },
  { id: 13, name: 'Lucky Gupta Projects', image: '/companies/company-13.jpg' },
  { id: 14, name: 'Lucky Gupta Energy', image: '/companies/company-14.jpg' },
  { id: 15, name: 'Lucky Gupta Events', image: '/companies/company-15.jpg' },
  { id: 16, name: 'Lucky Gupta International', image: '/companies/company-16.jpg' },
  { id: 17, name: 'Lucky Gupta Trading Co.', image: '/companies/company-17.jpg' },
  { id: 18, name: 'Lucky Gupta Communications', image: '/companies/company-18.jpg' },
  { id: 19, name: 'Lucky Gupta Ventures', image: '/companies/company-19.jpg' },
  { id: 20, name: 'Lucky Gupta Industries', image: '/companies/company-20.jpg' },
  { id: 21, name: 'Lucky Gupta Health Care', image: '/companies/company-21.jpg' },
  { id: 22, name: 'Lucky Gupta Foodzone', image: '/companies/company-22.jpg' },
  { id: 23, name: 'Lucky Gupta Networks', image: '/companies/company-23.jpg' },
  { id: 24, name: '#LGForYou', image: '/companies/company-24.jpg' },
  { id: 25, name: 'Lucky Gupta Insurance Co.', image: '/companies/company-25.jpg' },
];

export default function CompaniesSection() {
  return (
    <section id="companies" className="mt-32 w-full">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            List of Lucky Gupta Group of companies
          </h2>

          <Link
            href={COMPANY_SITE_URL}
            target="_blank"
            className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          >
            See all →
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid justify-center gap-x-6 gap-y-10
                        grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5">
          {companies.map((company) => (
            <Link
              key={company.id}
              href={COMPANY_SITE_URL}
              target="_blank"
              className="group flex flex-col items-center text-center"
            >
              {/* Logo Box */}
              <div className="flex h-[140px] w-[140px]
                              sm:h-[160px] sm:w-[160px]
                              md:h-[180px] md:w-[180px]
                              items-center justify-center rounded-lg bg-white shadow-sm transition group-hover:shadow-md">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <p className="mt-3 max-w-[160px] text-sm font-semibold leading-snug text-neutral-800 dark:text-white">
                {company.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
