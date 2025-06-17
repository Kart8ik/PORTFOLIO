import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import SkillBadge from '@/components/SkillBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const skills = {
  'Programming Languages': ['python', 'cpp', 'javascript'],
  'Machine Learning': ['numpy', 'pandas', 'pytorch', 'tensorflow'],
  'Frontend': ['html', 'css', 'react', 'nextjs', 'electron', 'tailwind', 'shadcn', 'framer', 'redux'],
  'Backend': ['nodejs', 'express', 'fastapi', 'flask', 'firebase'],
  'Database': ['mongodb', 'mysql'],
  'Tools/Platforms': ['git', 'figma', 'androidstudio']
}

const Skills = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-6xl relative flex items-start justify-start mb-8">
        <Link to="/" className="absolute left-0">
          <Button variant="outline" className="p-2 border-glow glow-border">
              <ArrowLeftIcon className="w-6 h-6 text-glow glow-foreground" />
          </Button>
        </Link>
        <h1 className="text-4xl ml-20 self-start text-foreground sm:text-foreground text-glow glow-foreground font-medium">
          Skills
        </h1>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-glow glow-card-foreground">{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Skills