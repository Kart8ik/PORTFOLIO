import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import SkillBadge from '@/components/SkillBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { skills } from '@/data/SkillsData'
import { consumePendingRect } from '@/lib/expandState'

const expandEase = [0.32, 0.72, 0, 1]

const Skills = () => {
  const rectRef = useRef(consumePendingRect())
  const r = rectRef.current
  return (
    <motion.div
        style={{ position: 'fixed', zIndex: 50, overflow: 'hidden', padding: '12px' }}
        initial={r ? { top: r.top, left: r.left, width: r.width, height: r.height, borderRadius: 8 } : { opacity: 0 }}
        animate={{ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight, borderRadius: 0, opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
        transition={{ type: 'tween', duration: 0.9, ease: expandEase }}
    >
            <Card className="w-full h-full overflow-y-auto no-scrollbar bg-card/50 backdrop-blur-sm border-3 border-glow glow-border rounded-md flex flex-col">
                <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Skills</CardTitle>
                    <Button asChild variant="outline">
                        <Link to="/" state={{ back: true }}>
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
                        <CardContent className="flex flex-row gap-2 flex-wrap overflow-hidden">
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