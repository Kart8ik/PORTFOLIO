import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'


const BlogBox = ({title, link, description}) => {
  return (
    <Card>
        <CardHeader>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <CardTitle className='underline underline-offset-4 hover:font-bold'>{title}</CardTitle>
            </a>
        </CardHeader>
        <CardContent>
            <p>{description}</p>
        </CardContent>
    </Card>
  )
}

export default BlogBox