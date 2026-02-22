
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
    phase: number;   // for idle drift
}

/**
 * CursorEffect — Home-page only.
 * Original repulsion field with subtle idle breathing added.
 * Slightly more sensitive than the original (radius 110 → 140).
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
        let frame = 0;
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
                    x, y,
                    baseX: x, baseY: y,
                    vx: 0, vy: 0,
                    radius: Math.random() * 1.4 + 0.4,
                    color: COLORS[Math.floor(Math.random() * 4)],
                    phase: Math.random() * Math.PI * 2,
                });
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const draw = () => {
            frame++;
            ctx.clearRect(0, 0, w, h);

            // Batch by color for performance
            const batches: Record<string, Particle[]> = {
                '#4285F4': [], '#EA4335': [], '#FBBC05': [], '#34A853': [],
            };

            const R = 140; // slightly more than original 110

            for (const p of particles) {
                // ── Repulsion ───────────────────────────────────────────────────
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const d = Math.sqrt(dx * dx + dy * dy);

                if (d < R && d > 0) {
                    const force = (R - d) / R;
                    const ang = Math.atan2(dy, dx);
                    // Slightly stronger than original (0.9 → 1.1)
                    p.vx -= Math.cos(ang) * force * 1.1;
                    p.vy -= Math.sin(ang) * force * 1.1;
                }

                // ── Idle breathing — very subtle sin/cos drift ───────────────────
                // Amplitude 0.6px: barely perceptible, makes the field feel alive
                const idleX = p.baseX + Math.sin(frame * 0.004 + p.phase) * 0.6;
                const idleY = p.baseY + Math.cos(frame * 0.004 + p.phase * 1.2) * 0.6;

                // ── Spring + damping (original values) ───────────────────────────
                p.vx += (idleX - p.x) * 0.055;
                p.vy += (idleY - p.y) * 0.055;
                p.vx *= 0.82;
                p.vy *= 0.82;
                p.x += p.vx;
                p.y += p.vy;

                batches[p.color].push(p);
            }

            // Render
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

        const timer = setTimeout(() => { resize(); draw(); }, 80);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', resize);

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
            style={{ zIndex: 20, opacity: 0.45 }}
        />
    );
};

export default CursorEffect;
