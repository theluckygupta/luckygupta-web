import '@/lib/globals.css';

import { Navbar } from '@/components/page-ui/Navbar';
import { Footer } from '@/components/page-ui/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col dark:bg-black">

            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}