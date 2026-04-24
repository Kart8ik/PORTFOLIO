export const pageVariants = {
    initial: {
        opacity: 0,
        y: 16,
        scale: 0.985,
        filter: 'blur(4px)',
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
    },
    out: {
        opacity: 0,
        y: -10,
        scale: 1.01,
        filter: 'blur(3px)',
    },
};

export const pageTransition = {
    type: 'spring',
    stiffness: 190,
    damping: 24,
    mass: 0.8,
};
