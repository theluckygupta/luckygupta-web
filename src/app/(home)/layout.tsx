import { Navbar } from '@/components/page-ui/Navbar';
import '@/lib/globals.css';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dark:bg-black">
            <Navbar />
            {children}
        </div>
    );
}
