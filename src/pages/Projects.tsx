
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
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
                    className="mb-16 flex flex-col md:flex-row md:items-end gap-6"
                    style={{ borderBottom: '2px solid var(--color-text-primary)', paddingBottom: '1.5rem' }}
                >
                    <div className="flex-1">
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                            Selected Work
                        </p>
                        <h1 className="font-heading" style={{ fontSize: 'var(--h2-size)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                            Projects.
                        </h1>
                    </div>
                    <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text-muted)', maxWidth: '24rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                        A curated selection of experiments and production systems.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, idx) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col parchment hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,0.12)] transition-all duration-200"
                            style={{
                            }}
                        >
                            {/* Project Image */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="block relative overflow-hidden"
                                style={{ aspectRatio: '16/9' }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                {/* Tag overlay */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-semibold"
                                            style={{
                                                background: 'rgba(255,255,255,0.95)',
                                                color: 'var(--color-text-primary)',
                                                fontSize: '0.65rem',
                                                fontFamily: 'var(--font-sans)',
                                                fontWeight: 700,
                                                letterSpacing: '0.05em',
                                                textTransform: 'uppercase',
                                                border: '1px solid var(--color-border)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>

                            {/* Project Info */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <h2
                                                className="font-heading hover:underline"
                                                style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--color-text-primary)', textDecorationThickness: '2px', textUnderlineOffset: '3px' }}
                                            >
                                                {project.title}
                                            </h2>
                                        </a>
                                        <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{project.date}</span>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div
                                    className="flex items-center justify-between pt-4"
                                    style={{ borderTop: '1px solid var(--color-border)' }}
                                >
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline"
                                        style={{ color: 'var(--color-accent)', textUnderlineOffset: '3px', fontSize: '0.72rem', letterSpacing: '0.08em' }}
                                    >
                                        View project <ArrowUpRight size={14} />
                                    </a>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }} className="hover:text-black transition-colors"><Github size={18} /></a>
                                        {project.link && <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }} className="hover:text-black transition-colors"><ExternalLink size={18} /></a>}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
