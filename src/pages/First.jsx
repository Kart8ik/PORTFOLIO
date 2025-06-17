import React, { useRef, useState, useEffect } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import AnimatedBox from '../components/AnimatedBox'
import profile from '@/assets/profile.png' 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import instagram from '@/assets/instagram.png'
import leetcode from '@/assets/leetcode.png'
import SkillBadge from '@/components/SkillBadge'
import ProjectBox from '@/components/ProjectBox'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
import ExperienceBox from '@/components/ExperienceBox'

const skills ={
    'Programming Languages': ['python', 'cpp', 'javascript'],
    'Machine Learning': ['numpy', 'pandas', 'pytorch', 'tensorflow'],
    'Frontend': ['html', 'css','react', 'nextjs','electron', 'tailwind', 'shadcn', 'framer','redux'],
    'Backend': ['nodejs', 'express', 'fastapi', 'flask','firebase'],
    'Database': ['mongodb', 'mysql'],
    'Tools/Platforms': ['git', 'figma','androidstudio']
}

const projects = [
    {
        name: 'CalPal',
        description: 'Collaborative Task Management App',
        stack: ['react','express', 'nodejs', 'mongodb','tailwind','shadcn']
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

const experience = [
    {
        company: 'PES University',
        position: 'Frontend Developer',
        duration: 'March 2025 - March 2025',
        description: 'Worked on adding new features to the existing University placement dashboard, added features to make the dashboard more customizable with abilities to move ranges and filter through features',
    },
    {
        company: 'PES University',
        position: 'Graphics Designer',
        duration: 'March 2025 - March 2025',
        description: 'Made posters and certificates for two workshops conducted by PES University regarding AWS and Smart Contracts in Ethereum',
    },
]

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
  const firstTextFlexBasisSmall = useTransform(scrollYProgress, animationRange, ["50%", "0%"]);
  const imageFlexBasisSmall = useTransform(scrollYProgress, animationRange, ["50%", "0%"]);
  const imageSize = useTransform(scrollYProgress, animationRange, [208, 127]);
  const imageSizeSmall = useTransform(scrollYProgress, animationRange, [160, 61]);
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
                <Card className="w-full h-full sm:gap-2">
                  <CardHeader>
                    <CardTitle className="text-3xl text-foreground sm:text-foreground text-glow glow-foreground font-medium ">Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-hidden flex flex-col gap-2 overflow-fade-v">
                    {projects.map((project) => (
                      <ProjectBox key={project.name} {...project}/>
                    ))}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" className="text-card-foreground text-glow glow-card-foreground">
                        <Link to="/projects" className="flex items-center">
                            View All Projects
                            <ArrowRightIcon className="w-4 h-4 ml-2 text-glow glow-foreground" />
                        </Link>
                    </Button>
                  </CardFooter>
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
                        <CardTitle className="text-xl sm:text-3xl text-foreground sm:text-foreground text-glow glow-foreground font-medium ">Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-hidden overflow-fade-v">
                        {
                            Object.keys(skills).map((key) =>  {
                                return (
                                    <div key={key} className="flex flex-row mb-4 overflow-hidden overflow-fade-h">
                                        <h3 className="text-lg font-semibold text-glow glow-card-foreground mr-2">{key}:</h3>
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
                        <Button variant="outline" className="text-card-foreground text-glow glow-card-foreground">
                            <Link to="/skills" className="flex items-center">
                                View All Skills
                                <ArrowRightIcon className="w-4 h-4 ml-2 text-glow glow-foreground" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
              </AnimatedBox>

              {/* Vertical Box on Far Right */}
              <AnimatedBox
                from="top-right"
                className="box3 flex flex-col items-center justify-center col-start-6 col-end-9 row-start-1 row-end-3 sm:col-start-14 sm:col-end-15 sm:row-start-1 sm:row-end-4 z-20"
                scrollYProgress={scrollYProgress}
              >
                <Card className="w-full h-full px-0 py-0">
                    <div className="flex flex-col w-full h-full items-center justify-between">
                      <a href="https://github.com/kart8ik" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-13 h-13 img-glow glow-foreground"/>
                      </a>
                      <a href="https://www.linkedin.com/in/a--shri--karthik/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-13 h-13 img-glow glow-foreground"/>
                      </a>
                      <a href="https://www.instagram.com/krthk200518/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="w-13 h-13 img-glow glow-foreground"/>
                      </a>
                      <a href="https://leetcode.com/u/krthk200518/" target="_blank" rel="noopener noreferrer">
                        <img src={leetcode} alt="LeetCode" className="w-13 h-13 img-glow glow-foreground"/>
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
                    <CardTitle className="text-2xl text-foreground sm:text-foreground text-glow glow-foreground font-medium">Blogs & Gallery</CardTitle>
                    <CardDescription className="mt-2 text-xs text-glow glow-card-foreground font-light">I write blogs about my projects and learnings and use art to bring my ideas to life</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                                <Button variant="outline" className="text-card-foreground text-glow glow-card-foreground">
                                    <Link to="/blogs" className="flex items-center">
                                        View Blogs
                                        <ArrowRightIcon className="w-4 h-4 ml-2 text-glow glow-foreground" />
                                    </Link>
                                </Button>
                                <Button variant="outline" className="text-card-foreground text-glow glow-card-foreground">
                                    <Link to="/gallery" className="flex items-center">
                                        View Gallery
                                        <ArrowRightIcon className="w-4 h-4 ml-2 text-glow glow-foreground" />
                                    </Link>
                                </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedBox>

              {/* Middle Box with absolute centering */}
              <div className="box5-container col-start-4 col-end-6 row-start-7 row-end-9 sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-6 relative">
                <motion.div
                  className="box5 absolute top-1/2 left-1/2 z-10 bg-card/50 backdrop-blur-sm border-3 border-glow glow-border rounded-md w-full h-full flex flex-col sm:flex-row  overflow-hidden"
                  style={{
                    width,
                    height,
                    x: '-50%',
                    y: '-50%',
                    padding,
                  }}
                >
                    {isSmallScreen && <motion.div className="flex flex-col" style={{ opacity: textOpacity, flexBasis: textFlexBasis, flexShrink: 0, overflow: 'hidden' }}>
                      <div className="text-4xl font-semibold text-glow glow-foreground">Shri Karthik A</div>
                      <div className="text-lg mt-2 font-light text-glow glow-foreground">Full Stack Developer</div>
                      <div className="text-lg font-light text-glow glow-foreground">CS Student</div>
                      <div className="text-2xl text-card-foreground text-glow glow-card-foreground font-light mt-auto">Bengaluru, India</div>
                    </motion.div>
                    }
                    {!isSmallScreen && <motion.div className="flex flex-col" style={{ opacity: textOpacity, flexBasis: firstTextFlexBasisSmall, flexShrink: 0, overflow: 'hidden' }}>
                      <div className="text-2xl font-semibold text-glow glow-foreground">Shri Karthik A</div>
                      <div className="text-sm mt-2 font-light text-glow glow-foreground">Full Stack Developer</div>
                      <div className="text-sm font-light text-glow glow-foreground">CS Student</div>
                      <div className="text-lg text-card-foreground text-glow glow-card-foreground font-light mt-3">Bengaluru, India</div>
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
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-3xl text-foreground sm:text-foreground text-glow glow-foreground font-medium">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row justify-between items-center flex-wrap sm:flex-nowrap">
                        <span className="font-semibold text-glow glow-card-foreground text-sm sm:text-2xl">PES University</span>
                        <span className="text-foreground text-glow glow-foreground text-xs sm:text-md font-light">Aug 2023 - 2027</span>
                      </div>
                      <div className="text-xs sm:text-sm mt-4 text-foreground text-glow glow-foreground font-light">• Bachelor of Technology in Computer Science and Engineering</div> 
                      <div className="text-xs sm:text-sm mt-2 text-foreground text-glow glow-foreground font-light">• CGPA - 9.04</div>
                    </div>
                  </CardContent>
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
                    <CardTitle className="text-3xl text-foreground sm:text-foreground text-glow glow-foreground font-medium">Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-hidden flex flex-col gap-2 overflow-fade-v">
                    {experience.map((experience) => (
                      <ExperienceBox key={experience.company} {...experience} />
                    ))}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" className="text-card-foreground text-glow glow-card-foreground">
                        <Link to="/experience" className="flex items-center">
                            View All Experience
                            <ArrowRightIcon className="w-4 h-4 ml-2 text-glow glow-foreground" />
                        </Link>
                    </Button>
                  </CardFooter>
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