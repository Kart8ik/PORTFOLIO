import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import AnimatedBox from '../components/AnimatedBox'

const First = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div ref={scrollRef} className="w-full h-full overflow-y-scroll no-scrollbar">
        <div className="h-[200vh] relative">
          <div className="w-full h-screen flex items-center justify-center sticky top-0">
            <div className="w-full h-full grid grid-cols-[repeat(6,minmax(0,1fr))_62px_62px_repeat(6,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))_62px_62px_repeat(3,minmax(0,1fr))] gap-3 p-3 z-10">
              {/* Top Left Large Box */}
              <AnimatedBox
                from="top"
                className="box1 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-7 row-start-1 row-end-6"
                scrollYProgress={scrollYProgress}
              />

              {/* Top Right Large Box */}
              <AnimatedBox
                from="top"
                className="box2 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-7 col-end-14 row-start-1 row-end-4"
                scrollYProgress={scrollYProgress}
              />

              {/* Vertical Box on Far Right */}
              <AnimatedBox
                from="right"
                className="box3 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-14 col-end-15 row-start-1 row-end-4"
                scrollYProgress={scrollYProgress}
              />

              {/* Center Square (Profile) */}
              <AnimatedBox
                from="left"
                className="box4 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-1 col-end-4 row-start-6 row-end-9"
                scrollYProgress={scrollYProgress}
              />

              {/* Middle Left Box (box5) - This is our anchor box */}
              <div className="box5-container col-start-7 col-end-9 row-start-4 row-end-6 flex items-center justify-center">
                <div className="box5 w-full h-full border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm" />
              </div>

              {/* Middle Right Box */}
              <AnimatedBox
                from="bottom"
                className="box6 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-4 col-end-9 row-start-6 row-end-9"
                scrollYProgress={scrollYProgress}
              />

              {/* Bottom Large Box */}
              <AnimatedBox
                from="right"
                className="box7 border-2 border-[#3b3b4f] rounded-xl bg-[#181926]/70 backdrop-blur-sm col-start-9 col-end-15 row-start-4 row-end-9"
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