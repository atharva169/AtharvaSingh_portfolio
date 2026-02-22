
import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageTransition — subtle fade-up on page enter.
 *
 * The main transition effect is handled by the overlay curtain in
 * paperTransition.ts. This component adds a soft, barely-noticeable
 * content reveal (opacity + tiny y-lift) for polish once the page appears.
 * Kept very short so it doesn't fight with the curtain timing.
 */

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.30,
                ease: [0.25, 0.46, 0.45, 0.94], // custom ease — smooth decelerate
            }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
