
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
    const channels = [
        {
            icon: <Mail size={22} />,
            label: 'Email',
            value: 'atharvasinghh72@gmail.com',
            href: 'mailto:atharvasinghh72@gmail.com',
            cta: 'Send a message',
        },
        {
            icon: <Github size={22} />,
            label: 'GitHub',
            value: '@atharva169',
            href: 'https://github.com/atharva169',
            cta: 'View repositories',
        },
        {
            icon: <Linkedin size={22} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/atharva-singh1',
            href: 'https://www.linkedin.com/in/atharva-singh1/',
            cta: 'Connect with me',
        },
    ];

    return (
        <div className="page-container paper-texture" style={{ paddingTop: '4rem' }}>
            <div
                className="mx-auto"
                style={{ maxWidth: 'var(--container-max)', padding: 'var(--section-pad-y) var(--container-pad)' }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                    style={{ borderBottom: '2px solid var(--color-text-primary)', paddingBottom: '1.5rem' }}
                >
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                        Let's Talk
                    </p>
                    <h1 className="font-heading" style={{ fontSize: 'var(--h2-size)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                        Get In Touch.
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Elevator pitch */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <h2 className="font-heading mb-6" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                            Open to opportunities.
                        </h2>
                        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                            I'm currently looking for internships, collaborative projects, and full-time roles in software engineering, machine learning, and AI. If you have an interesting problem, I'd love to hear about it.
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '2.5rem' }}>
                            Whether it's a quick question or a detailed proposal — drop me a message and I'll get back to you quickly.
                        </p>

                        {/* Primary CTA */}
                        <a
                            href="mailto:atharvasinghh72@gmail.com"
                            className="btn-black inline-flex items-center gap-3 px-8 py-4 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-200"
                            style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
                        >
                            <Mail size={18} />
                            Send an Email
                        </a>
                    </motion.div>

                    {/* Right: Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        {channels.map((ch, idx) => (
                            <motion.a
                                key={ch.label}
                                href={ch.href}
                                target={ch.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="group flex items-center gap-5 p-5 parchment"
                                style={{ cursor: 'pointer', textDecoration: 'none' }}
                            >
                                <div
                                    className="shrink-0 w-11 h-11 flex items-center justify-center"
                                    style={{
                                        background: 'var(--color-text-primary)',
                                        color: '#fff',
                                        borderRadius: '2px',
                                    }}
                                >
                                    {ch.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.15rem' }}>
                                        {ch.label}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {ch.value}
                                    </p>
                                </div>
                                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent)' }}>
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
