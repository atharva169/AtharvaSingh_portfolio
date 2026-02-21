
import React, { useContext } from 'react';
import { TransitionContext } from '../context/TransitionContext';

interface TransitionLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** Called immediately (before animation) — useful to close mobile menus etc. */
    onBeforeNavigate?: () => void;
    title?: string;
    'aria-label'?: string;
}

/**
 * TransitionLink
 * ──────────────
 * Drop-in `<a>` replacement that triggers the paper-crumple animation
 * before navigating to `to`.
 *
 * Use instead of react-router `<Link>` for all internal navigation.
 */
const TransitionLink: React.FC<TransitionLinkProps> = ({
    to,
    children,
    className,
    style,
    onBeforeNavigate,
    title,
    'aria-label': ariaLabel,
}) => {
    const { requestTransition } = useContext(TransitionContext);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onBeforeNavigate?.();
        requestTransition(to);
    };

    return (
        <a
            href={to}
            onClick={handleClick}
            className={className}
            style={style}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
};

export default TransitionLink;
