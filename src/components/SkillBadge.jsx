import React from 'react'
import { Badge } from './ui/badge'
import androidstudio from '@/assets/androidstudio.png'
import cpp from '@/assets/cpp.png'
import css from '@/assets/css.png'
import express from '@/assets/express.png'
import electron from '@/assets/electron.png'
import fastapi from '@/assets/fastapi.png'
import figma from '@/assets/figma.png'
import firebase from '@/assets/firebase.png'
import flask from '@/assets/flask.png'
import framer from '@/assets/framer.png'
import git from '@/assets/git.png'
import html from '@/assets/html.png'
import javascript from '@/assets/javascript.png'
import mongodb from '@/assets/mongodb.png'
import mysql from '@/assets/mysql.png'
import nextjs from '@/assets/nextjs.png'
import nodejs from '@/assets/nodejs.png'
import numpy from '@/assets/numpy.png'
import pandas from '@/assets/pandas.png'
import python from '@/assets/python.png'
import pytorch from '@/assets/pytorch.png'
import react from '@/assets/react.png'
import redux from '@/assets/redux.png'
import shadcn from '@/assets/shadcn.png'
import tailwind from '@/assets/tailwind.png'
import tensorflow from '@/assets/tensorflow.png'


export const skills = {
  androidstudio: {
    name: 'Android Studio',
    icon: androidstudio,
  },
  cpp: {
    name: 'C++',
    icon: cpp,
  },
  css: {
    name: 'CSS',
    icon: css,
  },
  express: {
    name: 'Express',
    icon: express,
  },
  electron: {
    name: 'Electron',
    icon: electron,
  },
  fastapi: {
    name: 'FastAPI',
    icon: fastapi,
  },
  figma: {
    name: 'Figma',
    icon: figma,
  },
  firebase: {
    name: 'Firebase',
    icon: firebase,
  },
  flask: {
    name: 'Flask',
    icon: flask,
  },
  framer: {
    name: 'Framer',
    icon: framer,
  },
  git: {
    name: 'Git',
    icon: git,
  },
  react: {
    name: 'React',
    icon: react,
  },
  express: {
    name: 'Express',
    icon: express,
  },
  nodejs: {
    name: 'NodeJS',
    icon: nodejs,
  },
  mongodb: {
    name: 'MongoDB',
    icon: mongodb,
  },
  html: {
    name: 'HTML',
    icon: html,
  },
  javascript: {
    name: 'JavaScript',
    icon: javascript,
  },
  css: {
    name: 'CSS',
    icon: css,
  },
  python: {
    name: 'Python',
    icon: python,
  },
  pytorch: {
    name: 'PyTorch',
    icon: pytorch,
  },
  numpy: {
    name: 'NumPy',
    icon: numpy,
  },
  pandas: {
    name: 'Pandas',
    icon: pandas,
  },
  mysql: {
    name: 'MySQL',
    icon: mysql,
  },
  nextjs: {
    name: 'NextJS',
    icon: nextjs,
  },
  redux: {
    name: 'Redux',
    icon: redux,
  },
  shadcn: {
    name: 'Shadcn',
    icon: shadcn,
  },
  tailwind: {
    name: 'Tailwind',
    icon: tailwind,
  },
  tensorflow: {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  cpp: {
    name: 'C++',
    icon: cpp,
  }
}

const SkillBadge = ({ skill }) => {
  return (
    <Badge
      variant="default"
      className="text-foreground sm:text-foreground text-glow glow-foreground font-regular bg-accent p-1"
    >
      <img src={skills[skill].icon} alt={skills[skill].name} className="w-4 h-4 mr-1" />
      {skills[skill].name}
    </Badge>
  )
}

export default SkillBadge
