
import { gsap } from 'gsap';

/**
 * pageTransition.ts
 * ══════════════════════════════════════════════════════════════════════════════
 * Clean, premium GSAP page transition.
 *
 * SEQUENCE
 * ─────────
 *   EXIT   → current page scales + folds inward → center → opacity 0
 *   VOID   → body turns black, old route removed, new route rendered
 *   ENTER  → new page expands from center outward → settles flat
 *
 * RULES
 * ─────
 *   • Animates ONLY `transform` and `opacity` (GPU-accelerated)
 *   • `will-change` + `translateZ(0)` force composited layer
 *   • No canvas, no cloning, no DOM overlays, no layout reflows
 *   • Single GSAP timeline each phase
 */

let isBusy = false;

export async function playPaperTransition(
    navigateFn: () => void,
    onComplete: () => void
): Promise<void> {
    if (isBusy) return;
    isBusy = true;

    const root = document.getElementById('root');
    if (!root) { isBusy = false; onComplete(); return; }

    // ── Prepare: force GPU compositing ──────────────────────────────────────
    gsap.set(root, {
        transformOrigin: '50% 50%',
        transformPerspective: 1000,
        willChange: 'transform, opacity',
        // translateZ(0) promotes element to its own composited layer
        z: 0,
    });

    // ── EXIT: page folds inward, compresses to center, fades ────────────────
    //
    // Slight rotateX/Y variation so it reads as a fold, not a plain scale.
    // power3.in = slow start → fast collapse (paper stiffness → snap)
    //
    const exitTl = gsap.timeline();
    exitTl
        .to(root, {
            duration: 0.20,
            scale: 0.90,
            rotateX: 8,
            rotateY: -4,
            ease: 'power2.in',
        })
        .to(root, {
            duration: 0.30,
            scale: 0.04,
            rotateX: 18,
            rotateY: -9,
            z: -600,
            opacity: 0,
            ease: 'power4.in',
        });

    await exitTl;

    // ── VOID: black screen, navigate ────────────────────────────────────────
    const prevBg = document.body.style.background;
    document.body.style.background = '#000';
    document.body.style.overflow = 'hidden';

    navigateFn();
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Wait for React to commit and paint the new route
    await new Promise<void>((res) =>
        requestAnimationFrame(() =>
            requestAnimationFrame(() => setTimeout(res, 36))
        )
    );

    // ── ENTER: new page starts compressed at center ─────────────────────────
    //
    // Mirror the exit end-state so enter begins from the same "void point".
    //
    gsap.set(root, {
        transformOrigin: '50% 50%',
        transformPerspective: 1000,
        willChange: 'transform, opacity',
        scale: 0.04,
        rotateX: -18,
        rotateY: 9,
        z: -600,
        opacity: 0,
    });

    // Expand + settle:
    //   1. Expand to full with slight overshoot (power3.out)
    //   2. Tiny bounce-back settle (back.out)
    const enterTl = gsap.timeline({
        onComplete: () => {
            gsap.set(root, { clearProps: 'all' });
            document.body.style.background = prevBg;
            document.body.style.overflow = '';
            isBusy = false;
            onComplete();
        },
    });

    enterTl
        .to(root, {
            duration: 0.48,
            scale: 1.02,
            rotateX: 0,
            rotateY: 0,
            z: 0,
            opacity: 1,
            ease: 'power3.out',
        })
        // Settle: slight pull-back snap — page feels like it locks flat
        .to(root, {
            duration: 0.18,
            scale: 1,
            ease: 'back.out(2)',
        });
}
