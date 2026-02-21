
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[100] glass border-b"
            style={{ borderColor: 'var(--color-border)' }}
        >
            <div
                className="mx-auto px-6 flex justify-between items-center"
                style={{ maxWidth: 'var(--container-max)', height: '4rem' }}
            >
                {/* Logo */}
                <TransitionLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.01em', textDecoration: 'none', color: 'inherit' }}
                >
                    <span
                        className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform"
                        style={{ background: 'var(--color-text-primary)' }}
                    >
                        A
                    </span>
                    <span style={{ color: 'var(--color-text-primary)' }}>Singh.</span>
                </TransitionLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <TransitionLink
                            key={link.path}
                            to={link.path}
                            className="relative py-1 transition-colors duration-200"
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                color: isActive(link.path) ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                            }}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                                    style={{ background: 'var(--color-accent)' }}
                                />
                            )}
                        </TransitionLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2"
                    style={{ color: 'var(--color-text-primary)' }}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t overflow-hidden"
                        style={{ borderColor: 'var(--color-border)' }}
                    >
                        <div className="flex flex-col py-6 px-6 gap-5">
                            {navLinks.map((link) => (
                                <TransitionLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 700,
                                        fontSize: '1.5rem',
                                        color: isActive(link.path) ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                                        letterSpacing: '-0.01em',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.name}
                                </TransitionLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
