
import { gsap } from 'gsap';

/**
 * elegantTransition.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Premium overlay-curtain page transition.
 *
 * WHY THIS IS SMOOTH:
 *   The old approach animated #root (scale/rotateX) which caused:
 *     - Layout recalculation on transform changes
 *     - Jitter as React re-renders during the animation
 *
 *   This new approach uses a *separate* composited overlay div:
 *     1. Overlay slides IN  (page content untouched, no jerk)
 *     2. Screen is covered → navigate, React re-renders safely underneath
 *     3. Overlay slides OUT → reveals the fresh page
 *
 * EFFECT: "Liquid Curtain" — a sleek dark panel with a shimmer edge sweeps
 *          across and back, total ~0.65s, feels silky and premium.
 */

let isBusy = false;

function createOverlay(): HTMLDivElement {
    const el = document.createElement('div');
    el.id = '__transition-overlay__';

    Object.assign(el.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '9999',
        pointerEvents: 'none',
        // Rich dark panel with subtle shimmer stripe
        background: 'linear-gradient(105deg, #0A0A0A 0%, #111111 45%, #1a1a1a 50%, #0D0D0D 100%)',
        willChange: 'transform',
        // Start off-screen to the left
        transform: 'translateX(-100%)',
    });

    return el;
}

export async function playPaperTransition(
    navigateFn: () => void,
    onComplete: () => void
): Promise<void> {
    if (isBusy) return;
    isBusy = true;

    // ── Create & mount overlay ───────────────────────────────────────────────
    const overlay = createOverlay();
    document.body.appendChild(overlay);

    // ── SWEEP IN: overlay slides across from left → full coverage ────────────
    // Cubic-bezier: slow start → explosive acceleration → sharp stop
    await gsap.to(overlay, {
        duration: 0.42,
        xPercent: 100,
        ease: 'power4.inOut',
    });

    // ── COVERED: safely swap the route ──────────────────────────────────────
    navigateFn();
    window.scrollTo({ top: 0, behavior: 'instant' });

    // One rAF cycle — React commits new route while screen is covered
    await new Promise<void>((res) => requestAnimationFrame(() => res()));

    // ── SWEEP OUT: overlay slides away to the right → reveals new page ────── 
    // Separate ease: gentle start → accelerate → silky stop
    await gsap.to(overlay, {
        duration: 0.40,
        xPercent: 200,
        ease: 'power3.inOut',
    });

    // ── Cleanup ──────────────────────────────────────────────────────────────
    document.body.removeChild(overlay);
    isBusy = false;
    onComplete();
}
