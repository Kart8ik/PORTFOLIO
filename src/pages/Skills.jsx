import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import SkillBadge from '@/components/SkillBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { skills } from '@/data/SkillsData'

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
    duration: 0.8,
};

const Skills = () => {
  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-screen h-screen flex items-center justify-center backdrop-blur-sm"
    >
          <Card className="w-full h-full bg-card/50 border-0 rounded-none flex flex-col">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Skills</CardTitle>
                    <Button asChild variant="outline">
                        <Link to="/">
                            <ArrowLeftIcon className="w-4 h-4 mr-2" />
                            Back
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                    <Card key={category} className="flex flex-col">
                        <CardHeader>
                        <CardTitle className="text-2xl text-card-foreground apply-glow glow-card-foreground">{category}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                            <SkillBadge key={skill} skill={skill} />
                        ))}
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </CardContent>
          </Card>
    </motion.div>
  )
}

export default Skills