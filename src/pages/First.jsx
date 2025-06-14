import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import AnimatedBox from '../components/AnimatedBox'

const First = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })

  const animationRange = [0, 0.6]

  // Animate width and height for non-distorting borders
  const width = useTransform(scrollYProgress, animationRange, ['400%', '100%'])
  const height = useTransform(scrollYProgress, animationRange, ['200%', '100%'])

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div ref={scrollRef} className="w-full h-full overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div className="h-[200vh] relative">
          <div className="w-full h-screen flex items-center justify-center sticky top-0">
            <div className="w-full h-full grid grid-cols-[repeat(6,minmax(0,1fr))_62px_62px_repeat(6,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))_62px_62px_repeat(3,minmax(0,1fr))] gap-3 p-3">
              {/* Top Left Large Box */}
              <AnimatedBox
                from="top-left"
                className="box1 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-7 row-start-1 row-end-6 z-20"
                scrollYProgress={scrollYProgress}
              />

              {/* Top Right Large Box */}
              <AnimatedBox
                from="top"
                className="box2 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-7 col-end-14 row-start-1 row-end-4 z-20"
                scrollYProgress={scrollYProgress}
              />

              {/* Vertical Box on Far Right */}
              <AnimatedBox
                from="top-right"
                className="box3 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-14 col-end-15 row-start-1 row-end-4 z-20"
                scrollYProgress={scrollYProgress}
              />

              {/* Center Square (Profile) */}
              <AnimatedBox
                from="bottom-left"
                className="box4 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-4 row-start-6 row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              />

              {/* Middle Box with absolute centering */}
              <div className="box5-container col-start-7 col-end-9 row-start-4 row-end-6 relative">
                <motion.div
                  className="box5 absolute top-1/2 left-1/2 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm z-10"
                  style={{
                    width,
                    height,
                    x: '-50%', // Static centering transforms
                    y: '-50%',
                  }}
                />
              </div>

              {/* Middle Right Box */}
              <AnimatedBox
                from="bottom"
                className="box6 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-4 col-end-9 row-start-6 row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              />

              {/* Bottom Large Box */}
              <AnimatedBox
                from="bottom-right"
                className="box7 border-2 border-[#3b3b4f] rounded-sm bg-[#181926]/70 backdrop-blur-sm col-start-9 col-end-15 row-start-4 row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First