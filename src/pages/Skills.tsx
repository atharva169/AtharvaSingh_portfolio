
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const categoryColors: Record<string, string> = {
    Language: '#4285F4',
    Framework: '#34A853',
    Tool: '#FBBC05',
    Concept: '#EA4335',
};

const Skills: React.FC = () => {
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

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
                        Capabilities
                    </p>
                    <h1 className="font-heading" style={{ fontSize: 'var(--h2-size)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                        My Toolkit.
                    </h1>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="parchment p-8"
                        >
                            <div
                                className="inline-flex items-center gap-2 mb-6 px-3 py-1"
                                style={{
                                    background: categoryColors[cat] + '15',
                                    border: `1px solid ${categoryColors[cat]}40`,
                                    borderRadius: '2px',
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: categoryColors[cat] }} />
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: categoryColors[cat] }}>
                                    {cat}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.filter(s => s.category === cat).map(skill => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-1.5 text-xs font-semibold"
                                        style={{
                                            background: 'var(--color-text-primary)',
                                            color: '#fff',
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '0.72rem',
                                            letterSpacing: '0.05em',
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
