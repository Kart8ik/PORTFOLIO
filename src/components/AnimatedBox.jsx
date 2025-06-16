import { motion, useTransform } from 'framer-motion'

const AnimatedBox = ({ children, from, className, scrollYProgress }) => {
  const getTransformations = (direction, progress) => {
    // The animation will complete when the user has scrolled 30% of the page.
    const animationRange = [0, 0.6]

    switch (direction) {
      case 'top-left':
        return {
          x: useTransform(progress, animationRange, [-1100, 0]),
          y: useTransform(progress, animationRange, [-700, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'bottom-left':
        return {
          x: useTransform(progress, animationRange, [-700, 0]),
          y: useTransform(progress, animationRange, [900, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'left':
        return {
          x: useTransform(progress, animationRange, [-700, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'top-right':
        return {
          x: useTransform(progress, animationRange, [700, 0]),
          y: useTransform(progress, animationRange, [-600, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'right':
        return {
          x: useTransform(progress, animationRange, [700, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'bottom-right':
        return {
          x: useTransform(progress, animationRange, [800, 0]),
          y: useTransform(progress, animationRange, [1000, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'top':
        return {
          y: useTransform(progress, animationRange, [-900, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
        }
      case 'bottom':
        return {
          y: useTransform(progress, animationRange, [600, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
          scale: useTransform(progress, animationRange, [2, 1]),
          blur: useTransform(progress, animationRange, [5, 5]),
          }
      default:
        return {
          opacity: useTransform(progress, animationRange, [1, 1]),
        }
    }
  }

  const style = getTransformations(from, scrollYProgress)

  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  )
}

export default AnimatedBox 