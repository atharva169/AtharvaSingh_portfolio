
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen selection:bg-black selection:text-white flex flex-col bg-white relative">
            <Navbar />
            <main className="flex-1 relative bg-transparent">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
