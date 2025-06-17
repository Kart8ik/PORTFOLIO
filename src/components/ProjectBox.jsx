import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { skills } from './SkillBadge'
import SkillBadge from './SkillBadge'

const ProjectBox = ({name, description, stack}) => {
  return (
    <Card className="sm:py-3 sm:gap-2">
        <CardHeader className="flex flex-row justify-between items-center sm:px-4">
            <CardTitle className="text-xl text-card-foreground text-glow glow-card-foreground font-medium ">{name}</CardTitle>
            <div className="text-foreground text-glow glow-foreground font-light">{description}</div>
        </CardHeader>
        <CardContent className="flex flex-row gap-2 sm:px-4 ml-4">
                {stack.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
        </CardContent>
    </Card>
  )
}

export default ProjectBox
