import React, { useRef, useState, useEffect } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import AnimatedBox from '../components/AnimatedBox'
import profile from '@/assets/profile.png' 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'

const First = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const animationRange = [0, 0.6]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)')
    const handleMediaQueryChange = (e) => setIsSmallScreen(e.matches)

    // Initial check
    handleMediaQueryChange(mediaQuery)

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageFlexBasis = useTransform(scrollYProgress, animationRange, ["35%", "100%"]);
  const textFlexBasis = useTransform(scrollYProgress, animationRange, ["65%", "0%"]);
  const imageSize = useTransform(scrollYProgress, animationRange, [208, 127]);
  const padding = useTransform(scrollYProgress, animationRange, [28, 0]);
  
  // Animate width and height for non-distorting borders
  const width = useTransform(scrollYProgress, animationRange, isSmallScreen ? ['470%', '100%'] : ['500%', '100%'])
  const height = useTransform(scrollYProgress, animationRange, isSmallScreen ? ['200%', '100%'] : ['600%', '100%'])
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div ref={scrollRef} className="w-full h-full overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div className="h-[200vh] relative">
          <div className="w-full h-screen flex items-center justify-center sticky top-0">
            <div className="w-full h-full grid grid-cols-[repeat(3,minmax(0,1fr))_25px_25px_repeat(3,minmax(0,1fr))] sm:grid-cols-[repeat(6,minmax(0,1fr))_62px_62px_repeat(6,minmax(0,1fr))] grid-rows-[repeat(6,minmax(0,1fr))_25px_25px_repeat(6,minmax(0,1fr))] sm:grid-rows-[repeat(3,minmax(0,1fr))_62px_62px_repeat(3,minmax(0,1fr))] gap-3 p-3">
              {/* Top Left Large Box */}
              <AnimatedBox
                from="top-left"
                className="box1 col-start-1 col-end-6 row-start-1 row-end-7 sm:col-start-1 sm:col-end-7 sm:row-start-1 sm:row-end-6 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>

              {/* Top Right Large Box */}
              <AnimatedBox
                from={isSmallScreen ? 'top' : 'right'}
                className="box2 col-start-6 col-end-9 row-start-3 row-end-9 sm:col-start-7 sm:col-end-14 sm:row-start-1 sm:row-end-4 z-20"
                scrollYProgress={scrollYProgress}
                >
                  <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>

              {/* Vertical Box on Far Right */}
              <AnimatedBox
                from="top-right"
                className="box3 col-start-6 col-end-9 row-start-1 row-end-3 sm:col-start-14 sm:col-end-15 sm:row-start-1 sm:row-end-4 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>

              {/* Center Square (Profile) */}
              <AnimatedBox
                from="bottom-left"
                className="box4 col-start-1 col-end-4 row-start-12 row-end-15 sm:col-start-1 sm:col-end-4 sm:row-start-6 sm:row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>

              {/* Middle Box with absolute centering */}
              <div className="box5-container col-start-4 col-end-6 row-start-7 row-end-9 sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-6 relative">
                <motion.div
                  className="box5 absolute top-1/2 left-1/2 z-10 bg-card/50 backdrop-blur-sm border-2 rounded-sm w-full h-full flex flex-row overflow-hidden"
                  style={{
                    width,
                    height,
                    x: '-50%',
                    y: '-50%',
                    padding,
                  }}
                >
                    <motion.div className="flex flex-col" style={{ opacity: textOpacity, flexBasis: textFlexBasis, flexShrink: 0, overflow: 'hidden' }}>
                      <div className="text-4xl font-semibold">Shri Karthik A</div>
                      <div className="text-lg mt-2 font-light">Full Stack Developer</div>
                      <div className="text-lg font-light">CS Student</div>
                      <div className="text-2xl text-card-foreground font-light mt-auto">Bengaluru, India</div>
                    </motion.div>
                    <motion.div className="flex items-center justify-center" style={{ flexBasis: imageFlexBasis, flexShrink: 0 }}>
                      <motion.img src={profile} alt="Profile" style={{ width: imageSize, height: imageSize }} className="rounded-sm border-2 border" />
                    </motion.div>
                </motion.div>
              </div>

              {/* Middle Right Box */}
              <AnimatedBox
                from={isSmallScreen ? 'bottom' : 'left'}
                className="box6 col-start-1 col-end-4 row-start-7 row-end-12 sm:col-start-4 sm:col-end-9 sm:row-start-6 sm:row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>

              {/* Bottom Large Box */}
              <AnimatedBox
                from="bottom-right"
                className="box7 col-start-4 col-end-9 row-start-9 row-end-15 sm:col-start-9 sm:col-end-15 sm:row-start-4 sm:row-end-9 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Shri Karthik A</CardTitle>
                  </CardHeader>
                </Card>
              </AnimatedBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First