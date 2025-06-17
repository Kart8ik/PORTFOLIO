import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const ExperienceBox = ({company, position, duration, description}) => {
  return (
    <Card className="sm:py-3 sm:gap-2">
        <CardHeader className="flex flex-row justify-between items-center sm:px-4">
            <CardTitle className="text-xl text-card-foreground text-glow glow-card-foreground font-medium">{company}</CardTitle>
            <div className="flex flex-col">
                <CardDescription className="text-glow glow-card-foreground font-medium">{position}</CardDescription>
                <CardDescription className="text-foreground sm:text-foreground text-sm text-glow glow-foreground font-light">{duration}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="sm:px-4 sm:py-2">
            <CardDescription className="text-foreground sm:text-foreground text-sm text-glow glow-card-foreground font-light">{description}</CardDescription>
        </CardContent>
    </Card>
  )
}

export default ExperienceBox