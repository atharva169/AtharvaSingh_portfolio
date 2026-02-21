
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className="border-t"
            style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-surface)',
                padding: '3rem var(--container-pad)',
            }}
        >
            <div
                className="mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
                style={{ maxWidth: 'var(--container-max)' }}
            >
                {/* Left: Brand */}
                <div>
                    <div
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.01em',
                            marginBottom: '0.25rem',
                        }}
                    >
                        Atharva Singh
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        Building smart solutions that matter.
                    </div>
                </div>

                {/* Center: Nav links */}
                <div className="flex gap-6">
                    {['/', '/about', '/projects', '/contact'].map((path, i) => (
                        <Link
                            key={path}
                            to={path}
                            style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}
                            className="hover:text-black transition-colors"
                        >
                            {['Home', 'About', 'Projects', 'Contact'][i]}
                        </Link>
                    ))}
                </div>

                {/* Right: Social + copyright */}
                <div className="flex flex-col items-center md:items-end gap-3">
                    <div className="flex gap-4">
                        <a href="https://github.com/atharva169" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }} className="hover:text-black transition-colors"><Github size={18} /></a>
                        <a href="https://www.linkedin.com/in/atharva-singh1/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }} className="hover:text-black transition-colors"><Linkedin size={18} /></a>
                        <a href="mailto:atharvasinghh72@gmail.com" style={{ color: 'var(--color-text-muted)' }} className="hover:text-black transition-colors"><Mail size={18} /></a>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                        © {year} Atharva Singh. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
