import '@/lib/globals.css';

import { Navbar } from '@/components/page-ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col dark:bg-black">

            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>

        </div>
    );
}