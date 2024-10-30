import '@/assets/styles/globals.css';

import HomePage from "./page";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (<html>
        <body>
            <main>
            <Navbar />
            {children}
            <Footer />
            </main>
        </body>
    </html>);
}
export default MainLayout;