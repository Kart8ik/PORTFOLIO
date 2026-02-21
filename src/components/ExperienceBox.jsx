import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import SkillBadge from './SkillBadge'
import { ExternalLink } from 'lucide-react'

export const ExperienceBoxBasic = ({company, position, duration, location, description}) => {
  return (
    <Card className="w-full sm:py-4 sm:gap-2">
        <CardHeader className="flex flex-row justify-between items-center sm:px-4">
            <div>
                <CardTitle className="text-xl text-card-foreground apply-glow glow-card-foreground font-medium">{company}</CardTitle>
                <div className="text-foreground sm:text-foreground text-sm apply-glow glow-foreground font-light">{location}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <CardDescription className="apply-glow glow-card-foreground font-medium">{position}</CardDescription>
                <CardDescription className="text-foreground sm:text-foreground text-sm apply-glow glow-foreground font-light">{duration}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="sm:px-4 mt-2">
            <CardDescription className="text-foreground sm:text-foreground text-sm apply-glow glow-card-foreground font-light">{description}</CardDescription>
        </CardContent>
    </Card>
  )
}

export const ExperienceBoxComplex = ({company, position, duration, location, link, description, skills}) => {
  return (
    <Card className="w-full">
        <CardHeader className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4">
            <div>
                <CardTitle className="text-xl text-card-foreground apply-glow glow-card-foreground font-medium">{company}</CardTitle>
                <div className="text-foreground sm:text-foreground text-sm apply-glow glow-foreground font-light">{location}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <CardDescription className="text-foreground sm:text-foreground text-sm apply-glow glow-foreground font-light">{position}</CardDescription>
                <CardDescription className="apply-glow glow-foreground font-light">{duration}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                ))}
            </div>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                      className="inline-flex items-center justify-end gap-1 text-sm text-card-foreground apply-glow glow-card-foreground font-light"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink size={14} />
                                </a>
                            )}
          <CardDescription className="text-foreground sm:text-foreground text-sm apply-glow glow-card-foreground font-light">{description}</CardDescription>
        </CardContent>
    </Card>
  )
}