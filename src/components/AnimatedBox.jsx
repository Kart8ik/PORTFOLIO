import { motion, useTransform } from 'framer-motion';

const AnimatedBox = ({ children, from, className, scrollYProgress }) => {
  const getTransformations = (direction, progress) => {
    // The animation will complete when the user has scrolled 30% of the page.
    const animationRange = [0, 0.6];

    switch (direction) {
      case 'top-left':
        return {
          x: useTransform(progress, animationRange, [-1100, 0]),
          y: useTransform(progress, animationRange, [-700, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'bottom-left':
        return {
          x: useTransform(progress, animationRange, [-700, 0]),
          y: useTransform(progress, animationRange, [900, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'left':
        return {
          x: useTransform(progress, animationRange, [-700, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'top-right':
        return {
          x: useTransform(progress, animationRange, [700, 0]),
          y: useTransform(progress, animationRange, [-600, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'right':
        return {
          x: useTransform(progress, animationRange, [700, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'bottom-right':
        return {
          x: useTransform(progress, animationRange, [800, 0]),
          y: useTransform(progress, animationRange, [1000, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'top':
        return {
          y: useTransform(progress, animationRange, [-900, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      case 'bottom':
        return {
          y: useTransform(progress, animationRange, [600, 0]),
          scale: useTransform(progress, animationRange, [2, 1]),
        };
      default:
        return {};
    }
  };

  const style = getTransformations(from, scrollYProgress);

  const transition = { type: 'spring', stiffness: 50, damping: 20 };

  return (
    <motion.div 
      className={className} 
      style={style}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox; 