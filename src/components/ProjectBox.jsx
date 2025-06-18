import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import SkillBadge from './SkillBadge'
import { Link } from 'react-router-dom'

export const ProjectBoxBasic = ({name, description, stack}) => {
  return (
    <Card className="sm:py-3 sm:gap-2">
        <CardHeader className="flex flex-row justify-between items-center sm:px-4">
            <CardTitle className="text-xl text-card-foreground apply-glow glow-card-foreground font-medium ">{name}</CardTitle>
            <div className="text-foreground apply-glow glow-foreground font-light">{description}</div>
        </CardHeader>
        <CardContent className="flex flex-row gap-2 sm:px-4 ml-4 overflow-hidden overflow-fade-h">
                {stack.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
        </CardContent>
    </Card>
  )
}

export const ProjectBoxComplex = ({name, description, duration, stack, github, link, image}) => {
  return (
    <Card className="sm:py-3 sm:gap-2">
        <CardHeader className="flex flex-col justify-between items-center sm:px-4">
          <img src={image} alt={name} className="w-full h-auto rounded-md" />
          <div className="flex flex-row justify-between items-center">
            <CardTitle className="text-xl text-card-foreground apply-glow glow-card-foreground font-medium ">{name}</CardTitle>
            <div className="flex flex-col justify-between items-center">
              <div className="text-foreground apply-glow glow-foreground font-light">{description}</div>
              <div className="text-foreground apply-glow glow-foreground font-light">{duration}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-row gap-2 sm:px-4 ml-4 overflow-hidden overflow-fade-h">
          <Link to={link} className="text-foreground apply-glow glow-foreground font-light">View Project</Link>
          <div className="flex flex-row gap-2">
            {stack.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </CardContent>
    </Card>
  )
}
