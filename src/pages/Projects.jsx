import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { ProjectBoxComplex } from '@/components/ProjectBox'
import { projects } from '@/data/ProjectsData'

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

const Projects = () => {
  return (
    <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-screen h-screen backdrop-blur-sm"
        >
            <Card className="w-full h-full overflow-y-auto no-scrollbar bg-card/50 border-0 rounded-none flex flex-col">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl text-foreground apply-glow glow-foreground font-medium">Projects</CardTitle>
                        <Button asChild variant="outline">
                            <Link to="/">
                                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                Back
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center w-full">
                    <div className="w-full flex flex-col items-center justify-center sm:w-1/2 gap-4">
                        {projects.map((exp, index) => (
                            <ProjectBoxComplex key={index} {...exp} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
  )
}

export default Projects