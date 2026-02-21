
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import TransitionLink from '../components/TransitionLink';
import CursorEffect from '../components/CursorEffect';

const Home: React.FC = () => {
    const socials = [
        { icon: <Github size={20} />, url: 'https://github.com/atharva169', label: 'GitHub' },
        { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/atharva-singh1/', label: 'LinkedIn' },
        { icon: <Mail size={20} />, url: 'mailto:atharvasinghh72@gmail.com', label: 'Email' },
    ];

    return (
        <div className="page-container paper-texture relative overflow-hidden flex flex-col justify-center" style={{ paddingTop: '5rem', minHeight: '100vh' }}>
            {/* Particle cursor — ONLY runs on Home page */}
            <CursorEffect />

            {/* Hero Content */}
            <div
                className="relative z-10 mx-auto w-full flex flex-col justify-center"
                style={{
                    maxWidth: 'var(--container-max)',
                    padding: 'var(--section-pad-y) var(--container-pad)',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10"
                >
                    {/* Eyebrow label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5"
                        style={{
                            border: '1px solid var(--color-border)',
                            background: 'rgba(255,255,255,0.7)',
                            borderRadius: '2px',
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34A853' }} />
                        <span
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-secondary)',
                            }}
                        >
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-heading select-none"
                        style={{
                            fontSize: 'var(--hero-font-size)',
                            lineHeight: 1.0,
                            letterSpacing: '-0.03em',
                            fontWeight: 800,
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        ATHARVA
                        <br />
                        SINGH
                    </motion.h1>

                    {/* Role identity strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-2"
                    >
                        {['Developer', 'ML Engineer', 'Vibe Coder ✦'].map((role, i) => (
                            <span key={role} className="inline-flex items-center gap-2">
                                <span
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.78rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                        color: role.includes('Vibe') ? 'var(--color-accent)' : 'var(--color-text-muted)',
                                    }}
                                >
                                    {role}
                                </span>
                                {i < 2 && (
                                    <span style={{ color: 'var(--color-border)', fontSize: '1rem', lineHeight: 1 }}>·</span>
                                )}
                            </span>
                        ))}
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="font-serif"
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                            lineHeight: 1.5,
                            color: '#525252',
                            maxWidth: '36rem',
                            fontStyle: 'italic',
                            fontWeight: 400,
                        }}
                    >
                        Driven to build{' '}
                        <span
                            className="font-serif not-italic font-bold"
                            style={{ color: 'var(--color-text-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '1px' }}
                        >
                            smart solutions
                        </span>{' '}
                        that solve real-world problems.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-5 pt-2"
                    >
                        <TransitionLink
                            to="/projects"
                            className="btn-black flex items-center gap-3 px-8 py-3.5 text-xs hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-200"
                            style={{ letterSpacing: '0.1em', fontSize: '0.75rem', textDecoration: 'none' }}
                        >
                            View Works
                            <ChevronRight size={16} />
                        </TransitionLink>

                        <TransitionLink
                            to="/contact"
                            className="flex items-center gap-3 px-8 py-3.5 text-xs hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-all duration-200"
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                color: 'var(--color-text-primary)',
                                border: '2px solid var(--color-border)',
                                textDecoration: 'none',
                            }}
                        >
                            Get In Touch
                        </TransitionLink>

                        {/* Divider */}
                        <div style={{ width: '1px', height: '2rem', background: 'var(--color-border)' }} className="hidden sm:block" />

                        {/* Social icons */}
                        <div className="flex items-center gap-4">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={s.label}
                                    className="transition-all duration-200 hover:-translate-y-1 hover:scale-110"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
