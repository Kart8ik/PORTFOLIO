export const pageVariants = {
    initial: {
        opacity: 0,
        y: 10,
        scale: 0.99,
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: -6,
        scale: 1.005,
    },
};

export const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.4,
};
