import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion'
import AnimatedBox from '../components/AnimatedBox'
import profile from '@/assets/profile.png' 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import resume from '@/assets/resume.png'
import leetcode from '@/assets/leetcode.png'
import SkillBadge from '@/components/SkillBadge'
import {ProjectBoxBasic} from '@/components/ProjectBox'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
import { ExperienceBoxBasic } from '@/components/ExperienceBox'
import { skills } from '@/data/SkillsData'
import { experience } from '@/data/ExperienceData'
import projectgif from '@/assets/section-gifs/projecticon.gif'
import skillgif from '@/assets/section-gifs/skillsicon.gif'
import educationgif from '@/assets/section-gifs/educationicon.gif'
import experiencegif from '@/assets/section-gifs/experienceicon.gif'
import blogsgif from '@/assets/section-gifs/blogsicon.gif'

const projects = [
    {
        name: 'CalPal',
        description: 'Collaborative Task Management App',
        stack: ['react','express', 'nodejs', 'mongodb','tailwind','shadcn'],
        github: 'https://github.com/Kart8ik/CALPAL_2.0',
        link: 'https://calpal-beige.vercel.app/'
    },
    {
        name: 'P2P-Echovoid',
        description: 'Peer to Peer LAN Chat Application',
        stack: ['electron', 'javascript', 'nodejs'],
    },
    {
        name: 'Loopy-tune',
        description: 'Create your own Background Music',
        stack: ['python', 'fastapi', 'react', 'tailwind','shadcn'],
    }
]

const pageVariants = {
    initial: {
        opacity: 0,
        transform: 'translateZ(0)',
    },
    in: {
        opacity: 1,
        transform: 'translateZ(0)',
    },
    out: {
        opacity: 0,
        transform: 'translateZ(0)',
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
};

const First = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useLayoutEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && scrollRef.current) {
      scrollRef.current.scrollTop = Number(savedScrollPosition);
    }
  }, []);

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
  
  const animationRange = [0, 0.6]
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageFlexBasis = useTransform(scrollYProgress, animationRange, ["35%", "100%"]);
  const textFlexBasis = useTransform(scrollYProgress, animationRange, ["65%", "0%"]);
  const firstTextFlexBasisSmall = useTransform(scrollYProgress, animationRange, ["50%", "0%"]);
  const imageFlexBasisSmall = useTransform(scrollYProgress, animationRange, ["50%", "0%"]);
  const imageSize = useTransform(scrollYProgress, animationRange, [208, 127]);
  const imageSizeSmall = useTransform(scrollYProgress, animationRange, [160, 61]);
  const padding = useTransform(scrollYProgress, animationRange, [28, 0]);
  const blurValue = useTransform(scrollYProgress, animationRange, [0, 4]);
  const blurValue2 = useTransform(scrollYProgress, animationRange, [4, 0]);
  const backdropBlur = useMotionTemplate`blur(${blurValue}px)`;
  const backdropBlur2 = useMotionTemplate`blur(${blurValue2}px)`;
  // Animate width and height for non-distorting borders
  const width = useTransform(scrollYProgress, animationRange, isSmallScreen ? ['470%', '100%'] : ['500%', '100%'])
  const height = useTransform(scrollYProgress, animationRange, isSmallScreen ? ['200%', '100%'] : ['600%', '100%'])
  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ backdropFilter: backdropBlur }}
        className="w-screen h-[100dvh] overflow-hidden relative"
    >
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
                    <Card className="w-full h-full sm:gap-2">
                    <CardHeader>
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium ">Projects</CardTitle>
                    </CardHeader>
                    {isSmallScreen ? (
                        <>
                        <CardContent className="overflow-hidden flex flex-col h-full gap-2 overflow-fade-v">
                        {projects.map((project) => (
                        <ProjectBoxBasic key={project.name} {...project}/>
                        ))}
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Link to="/projects" className="flex items-center" onClick={() => {
                            if (scrollRef.current) {
                                sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                            }
                        }}>
                            <Button variant="outline" className="text-card-foreground apply-glow glow-card-foreground">
                                View All 
                                <ArrowRightIcon className="w-4 h-4 ml-2 apply-glow glow-foreground" />
                            </Button>
                        </Link>
                    </CardFooter>
                    </>
                    ) : (
                        <Link to="/projects" className="flex w-full h-full" onClick={() => {
                            if (scrollRef.current) {
                                sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                            }
                        }}>
                            <CardContent className="flex flex-col w-full h-full items-end justify-end">
                                <img src={projectgif} alt="Projects" className="w-1/2 h-auto" />
                            </CardContent>
                        </Link>
                    )
                    }
                    </Card>
                </AnimatedBox>

                {/* Top Right Large Box */}
                <AnimatedBox
                    from={isSmallScreen ? 'top' : 'right'}
                    className="box2 col-start-6 col-end-9 row-start-3 row-end-9 sm:col-start-7 sm:col-end-14 sm:row-start-1 sm:row-end-4 z-20"
                    scrollYProgress={scrollYProgress}
                    >
                    <Card className="w-full h-full gap-2">
                        <CardHeader>
                            <CardTitle className="text-xl sm:text-3xl apply-glow glow-foreground font-medium ">Skills</CardTitle>
                        </CardHeader>
                        {isSmallScreen ? (
                          <>
                          <CardContent className="overflow-hidden overflow-fade-v">
                            {
                                Object.keys(skills).map((key) =>  {
                                    return (
                                        <div key={key} className="flex flex-row mb-4 overflow-hidden overflow-fade-h">
                                            <h3 className="text-lg font-semibold apply-glow glow-card-foreground mr-2">{key}:</h3>
                                            <div className="flex gap-2 overflow-hidden">
                                                {skills[key].map((skill) => (
                                                    <SkillBadge key={skill} skill={skill} />
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </CardContent>
                        <CardFooter className="flex justify-end ">
                            <Link to="/skills" className="flex items-center" onClick={() => {
                                if (scrollRef.current) {
                                    sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                }
                            }}>
                            <Button variant="outline" className="text-card-foreground apply-glow glow-card-foreground">
                                    View All
                                    <ArrowRightIcon className="w-4 h-4 ml-2 apply-glow glow-foreground" />                          
                            </Button>
                            </Link>
                        </CardFooter>
                        </>
                        ) : (
                            <Link to="/skills" className="flex w-full h-full" onClick={() => {
                                if (scrollRef.current) {
                                    sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                }
                            }}>
                                <CardContent className="flex flex-col w-full h-full items-end justify-end">
                                    <img src={skillgif} alt="Skills" className="w-2/3 h-auto" />
                                </CardContent>
                            </Link>
                        )}
                    </Card>
                </AnimatedBox>

                {/* Vertical Box on Far Right */}
                <AnimatedBox
                    from="top-right"
                    className="box3 flex flex-col items-center justify-center col-start-6 col-end-9 row-start-1 row-end-3 sm:col-start-14 sm:col-end-15 sm:row-start-1 sm:row-end-4 z-20"
                    scrollYProgress={scrollYProgress}
                >
                    <Card className="flex w-full h-full flex-wrap">
                        <div className="flex flex-col w-full h-full items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap  gap-4 sm:gap-0">
                        <a href="https://github.com/kart8ik" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-8 sm:w-11 h-8 sm:h-11 img-glow glow-foreground"/>
                        </a>
                        <a href="https://www.linkedin.com/in/a--shri--karthik/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-8 sm:w-11 h-8 sm:h-11 img-glow glow-foreground"/>
                        </a>
                        <a href="/SHRI_KARTHIK_RESUME.pdf" download>
                            <img src={resume} alt="Resume" className="w-8 sm:w-11 h-8 sm:h-11 img-glow glow-foreground"/>
                        </a>
                        <a href="https://leetcode.com/u/krthk200518/" target="_blank" rel="noopener noreferrer">
                            <img src={leetcode} alt="LeetCode" className="w-8 sm:w-11 h-8 sm:h-11 img-glow glow-foreground"/>
                        </a>
                        </div>
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
                        <CardTitle className="text-2xl apply-glow glow-foreground font-medium">Blogs & Gallery</CardTitle>
                        {isSmallScreen && <CardDescription className="mt-2 text-xs apply-glow glow-card-foreground font-light">I write blogs about my projects and learnings and use art to bring my ideas to life</CardDescription>}
                    </CardHeader>
                    {isSmallScreen ? (<CardContent className="flex flex-col h-full items-end justify-end gap-2 w-full">
                                    <Link to="/blogs" className="flex items-center w-full" onClick={() => {
                                        if (scrollRef.current) {
                                            sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                        }
                                    }}>
                                    <Button variant="outline" className="text-card-foreground apply-glow glow-card-foreground w-full">
                                            View Blogs
                                            <ArrowRightIcon className="w-4 h-4 ml-2 apply-glow glow-foreground" />
                                    </Button>
                                    </Link>
                                    <Link to="/gallery" className="flex items-center w-full" onClick={() => {
                                        if (scrollRef.current) {
                                            sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                        }
                                    }}>
                                        <Button variant="outline" className="text-card-foreground apply-glow glow-card-foreground w-full">
                                            View Gallery
                                            <ArrowRightIcon className="w-4 h-4 ml-2 apply-glow glow-foreground" />
                                        </Button>
                                    </Link>
                    </CardContent>) : (
                      <Link to="/blogs" className="flex w-full h-full" onClick={() => {
                        if (scrollRef.current) {
                            sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                        }
                    }}>
                        <CardContent className="flex flex-col w-full h-full items-end justify-end">
                          
                            <img src={blogsgif} alt="Blogs" className="w-1/2 h-auto" />
                        </CardContent>
                      </Link>
                    )}
                    </Card>
                </AnimatedBox>

                {/* Middle Box with absolute centering */}
                <div className="box5-container col-start-4 col-end-6 row-start-7 row-end-9 sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-6 relative">
                    <motion.div
                    className="box5 absolute top-1/2 left-1/2 z-10 bg-card/50 border-3 border-glow glow-border rounded-md w-full h-full flex flex-col sm:flex-row  overflow-hidden"
                    style={{
                        width,
                        height,
                        x: '-50%',
                        y: '-50%',
                        padding,
                        backdropFilter: backdropBlur2,
                    }}
                    >
                        {isSmallScreen && <motion.div className="flex flex-col" style={{ opacity: textOpacity, flexBasis: textFlexBasis, flexShrink: 0, overflow: 'hidden' }}>
                        <div className="text-4xl font-semibold apply-glow glow-foreground">Shri Karthik A</div>
                        <div className="text-lg mt-2 font-light apply-glow glow-foreground">Full Stack Developer</div>
                        <div className="text-lg font-light apply-glow glow-foreground">CS Student</div>
                        <div className="text-2xl text-card-foreground apply-glow glow-card-foreground font-light mt-auto">Bengaluru, India</div>
                        </motion.div>
                        }
                        {!isSmallScreen && <motion.div className="flex flex-col" style={{ opacity: textOpacity, flexBasis: firstTextFlexBasisSmall, flexShrink: 0, overflow: 'hidden' }}>
                        <div className="text-2xl font-semibold apply-glow glow-foreground">Shri Karthik A</div>
                        <div className="text-sm mt-2 font-light apply-glow glow-foreground">Full Stack Developer</div>
                        <div className="text-sm font-light apply-glow glow-foreground">CS Student</div>
                        <div className="text-lg text-card-foreground apply-glow glow-card-foreground font-light mt-3">Bengaluru, India</div>
                        </motion.div>
                        }
                        {isSmallScreen && <motion.div className="flex items-center justify-center" style={{ flexBasis: imageFlexBasis, flexShrink: 0 }}>
                        <motion.img src={profile} alt="Profile" style={{ width: imageSize, height: imageSize, filter: 'drop-shadow(0 0 5px rgba(42, 49, 85, 1))' }} className="rounded-md" />
                        </motion.div>
                        }
                        {!isSmallScreen && <motion.div className="flex items-center justify-end" style={{ flexBasis: imageFlexBasisSmall, flexShrink: 0 }}>
                        <motion.img src={profile} alt="Profile" style={{ width: imageSizeSmall, height: imageSizeSmall, filter: 'drop-shadow(0 0 5px rgba(42, 49, 85, 1))' }} className="rounded-md" />
                        </motion.div>
                        }
                    </motion.div>
                </div>

                {/* Middle Right Box */}
                <AnimatedBox
                    from={isSmallScreen ? 'bottom' : 'left'}
                    className="box6 col-start-1 col-end-4 row-start-7 row-end-12 sm:col-start-4 sm:col-end-9 sm:row-start-6 sm:row-end-9 z-20"
                    scrollYProgress={scrollYProgress}
                >
                <Link to="/education" className="w-full h-full block" onClick={() => {
                    if (scrollRef.current) {
                        sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                    }
                }}>
                    <Card className="w-all h-full">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-3xl apply-glow glow-foreground font-medium">Education</CardTitle>
                    </CardHeader>
                    {isSmallScreen ? (<CardContent>
                        <div className="flex flex-col justify-center">
                        <div className="flex flex-row justify-between items-center flex-wrap sm:flex-nowrap">
                            <span className="font-semibold apply-glow glow-card-foreground text-sm sm:text-2xl">PES University</span>
                            <span className="text-foreground apply-glow glow-foreground text-xs sm:text-md font-light">Aug 2023 - 2027</span>
                        </div>
                        <div className="text-xs sm:text-sm mt-4 text-foreground apply-glow glow-foreground font-light">• Bachelor of Technology in Computer Science and Engineering</div> 
                        <div className="text-xs sm:text-sm mt-2 text-foreground apply-glow glow-foreground font-light">• CGPA - 9.04</div>
                        </div>
                    </CardContent>
                    ) : (
                      <Link to="/education" className="flex w-full h-full" onClick={() => {
                        if (scrollRef.current) {
                            sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                        }
                    }}>
                        <CardContent className="flex flex-col w-full h-full items-end justify-end">
                            <img src={educationgif} alt="Education" className="w-2/3 h-auto" />
                        </CardContent>
                      </Link>
                    )}
                    </Card>
                </Link>
                </AnimatedBox>

                {/* Bottom Large Box */}
                <AnimatedBox
                    from="bottom-right"
                    className="box7 col-start-4 col-end-9 row-start-9 row-end-15 sm:col-start-9 sm:col-end-15 sm:row-start-4 sm:row-end-9 z-20"
                    scrollYProgress={scrollYProgress}
                >
                    <Card className="w-full h-full">
                        <CardHeader>
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Experience</CardTitle>
                        </CardHeader>
                        {isSmallScreen ? (
                        <>
                        <CardContent className="overflow-hidden flex flex-col h-full gap-2 overflow-fade-v">
                        {experience.map((experience) => (
                            <ExperienceBoxBasic key={experience.company} {...experience} />
                        ))}
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Link to="/experience" className="flex items-center" onClick={() => {
                                    if (scrollRef.current) {
                                        sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                    }
                                }}>
                            <Button variant="outline" className="text-card-foreground apply-glow glow-card-foreground">
                                    View All
                                    <ArrowRightIcon className="w-4 h-4 ml-2 apply-glow glow-foreground" />
                            </Button>
                          </Link>
                        </CardFooter>
                        </>
                        ) : (
                            <Link to="/experience" className="flex w-full h-full" onClick={() => {
                                if (scrollRef.current) {
                                    sessionStorage.setItem('scrollPosition', scrollRef.current.scrollTop);
                                }
                            }}>
                                <CardContent className="flex flex-col w-full h-full items-end justify-end">
                                    <img src={experiencegif} alt="Experience" className="w-1/2 h-auto" />
                                </CardContent>
                            </Link>
                        )}
                    </Card>
                </AnimatedBox>
                </div>
            </div>
            </div>
        </div>
    </motion.div>
  )
}

export default First