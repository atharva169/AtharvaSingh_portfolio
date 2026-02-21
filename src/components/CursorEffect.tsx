
import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
}

/**
 * CursorEffect — Home-page only.
 * Renders ~3500 colored dots that repel on mouse proximity.
 * All animation loops and event listeners are cleaned up on unmount.
 */
const CursorEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationId: number;
        let w = 0, h = 0;
        const mouse = { x: -9999, y: -9999 };

        // Google accent palette
        const COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = [];
            const count = Math.min(3500, Math.floor((w * h) / 600));
            for (let i = 0; i < count; i++) {
                const x = Math.random() * w;
                const y = Math.random() * h;
                particles.push({
                    x, y, baseX: x, baseY: y,
                    vx: 0, vy: 0,
                    radius: Math.random() * 1.4 + 0.4,
                    color: COLORS[Math.floor(Math.random() * 4)],
                });
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            // Batch by color for performance
            const batches: Record<string, Particle[]> = { '#4285F4': [], '#EA4335': [], '#FBBC05': [], '#34A853': [] };

            for (const p of particles) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                const R = 110;

                if (d < R) {
                    const force = (R - d) / R;
                    const ang = Math.atan2(dy, dx);
                    p.vx -= Math.cos(ang) * force * 0.9;
                    p.vy -= Math.sin(ang) * force * 0.9;
                }

                p.vx += (p.baseX - p.x) * 0.055;
                p.vy += (p.baseY - p.y) * 0.055;
                p.vx *= 0.82;
                p.vy *= 0.82;
                p.x += p.vx;
                p.y += p.vy;

                batches[p.color].push(p);
            }

            for (const [color, ps] of Object.entries(batches)) {
                if (!ps.length) continue;
                ctx.beginPath();
                ctx.fillStyle = color;
                for (const p of ps) {
                    ctx.moveTo(p.x + p.radius, p.y);
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                }
                ctx.fill();
            }

            animationId = requestAnimationFrame(draw);
        };

        const init = () => {
            resize();
            draw();
        };

        const timer = setTimeout(init, 80);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', resize);

        // CLEANUP — runs when navigating away from Home
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0, opacity: 0.5 }}
        />
    );
};

export default CursorEffect;
