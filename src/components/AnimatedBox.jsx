import { motion, useTransform } from 'framer-motion'

const AnimatedBox = ({ children, from, className, scrollYProgress }) => {
  const getTransformations = (direction, progress) => {
    // The animation will complete when the user has scrolled 30% of the page.
    const animationRange = [0, 0.3]

    switch (direction) {
      case 'left':
        return {
          x: useTransform(progress, animationRange, [-700, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
        }
      case 'right':
        return {
          x: useTransform(progress, animationRange, [700, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
        }
      case 'top':
        return {
          y: useTransform(progress, animationRange, [-600, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
        }
      case 'bottom':
        return {
          y: useTransform(progress, animationRange, [600, 0]),
          opacity: useTransform(progress, animationRange, [1, 1]),
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