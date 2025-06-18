import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import SkillBadge from './SkillBadge'
import { Button } from './ui/button'

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

export const ProjectBoxComplex = ({name, description, duration, stack, github, link, image, explanation}) => {
  return (
    <Card>
        <CardHeader className="flex flex-col w-full justify-between items-center sm:px-4">
          <div className='w-full'>
            {image ? (
              <img src={image} alt={name} className="w-full h-auto rounded-md" />
            ) : (
              <div className="w-full aspect-[21/9] bg-background/40 rounded-md " />
            )}
          </div>
          <div className="flex flex-row flex-wrap w-full justify-center sm:justify-between items-center mt-4">
            <CardTitle className="text-xl sm:text-2xl text-card-foreground apply-glow glow-card-foreground font-medium ">{name}</CardTitle>
            <div className="text-foreground text-sm apply-glow glow-foreground font-light">{description}</div>
          </div>
          <div className="flex flex-row flex-wrap w-full justify-center sm:justify-end items-center gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-foreground text-sm apply-glow glow-foreground font-light">GitHub</Button>
            </a>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-foreground text-sm apply-glow glow-foreground font-light">Live Link</Button>
              </a>
            )}
            <div className="text-foreground text-sm apply-glow glow-foreground font-light">{duration}</div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 sm:px-4 ml-4 mt-4">
          <div className="flex flex-row flex-wrap gap-2">
            {stack.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
          <div className="text-foreground text-sm apply-glow glow-foreground font-light">{explanation}</div>
        </CardContent>
    </Card>
  )
}
