
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { LEADERSHIP } from '../constants';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

const About: React.FC = () => {
    return (
        <div className="page-container paper-texture" style={{ paddingTop: '4rem' }}>
            <div
                className="mx-auto"
                style={{
                    maxWidth: 'var(--container-max)',
                    padding: 'var(--section-pad-y) var(--container-pad)',
                }}
            >
                {/* Page Header */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    custom={0}
                    variants={fadeUp}
                    className="mb-16"
                    style={{ borderBottom: '2px solid var(--color-text-primary)', paddingBottom: '1.5rem' }}
                >
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                        About Me
                    </p>
                    <h1 className="font-heading" style={{ fontSize: 'var(--h2-size)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                        Builder. Learner. Engineer.
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Education */}
                    <motion.div initial="hidden" animate="show" custom={1} variants={fadeUp} className="lg:col-span-7">
                        <div className="parchment p-8 md:p-12 mb-8">
                            <p
                                className="mb-6 text-xs font-bold uppercase tracking-widest"
                                style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
                            >
                                Education
                            </p>
                            <h2 className="font-heading mb-1" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
                                B.Tech — Computer Science
                            </h2>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                KIET Deemed University • Ghaziabad
                            </p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>2024 — 2028</p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                                Focused on high-performance software and AI-driven applications. My academic journey revolves around algorithmic efficiency and data-centric problem solving.
                            </p>
                            <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '2rem', paddingTop: '2rem' }}>
                                <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                    Specialization
                                </p>
                                <p className="font-heading" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                                    ML & Deep Learning
                                </p>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <motion.div initial="hidden" animate="show" custom={2} variants={fadeUp}>
                            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: '52rem' }}>
                                I'm a computer science student who builds things at the intersection of software engineering and machine learning. I enjoy solving complex problems with clean, efficient code — whether that's training a model, building a backend API, or designing a usable interface.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Leadership */}
                    <motion.div initial="hidden" animate="show" custom={2} variants={fadeUp} className="lg:col-span-5">
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem' }}>
                            Leadership
                        </p>
                        <div className="space-y-10">
                            {LEADERSHIP.map((item, idx) => (
                                <div key={idx} style={{ paddingLeft: '1.25rem', borderLeft: '3px solid var(--color-border)' }}>
                                    <h3 className="font-heading mb-1" style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.role}</h3>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {item.organization}
                                    </p>
                                    <ul style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-text-secondary)' }} className="space-y-2">
                                        {item.description.map((d, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <ChevronRight size={14} className="mt-1 shrink-0 text-gray-400" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
