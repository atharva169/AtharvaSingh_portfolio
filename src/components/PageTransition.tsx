
import React from 'react';
import { motion, Variants } from 'framer-motion';

/**
 * PageTransition — wraps every page for a 3D "paper unfold" effect.
 *
 * Enter: page starts crumpled (scaleY near 0, rotateX tilted) and "unfolds" open.
 * Exit : page crumples away in the reverse direction.
 */

const variants: Variants = {
    initial: {
        opacity: 0,
        scaleY: 0.05,
        rotateX: -38,
        y: '-1.5%',
    },
    animate: {
        opacity: 1,
        scaleY: 1,
        rotateX: 0,
        y: '0%',
        transition: {
            duration: 0.55,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        scaleY: 0.05,
        rotateX: 28,
        y: '1.5%',
        transition: {
            duration: 0.32,
            ease: 'easeIn',
        },
    },
};

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                transformOrigin: 'top center',
                perspective: 1200,
                width: '100%',
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
