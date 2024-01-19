import {
  jobjob,
  beyond,
  oshare,
  millionplants,
  japanblog,
  japanrabbitcom,
  japanrabbitlogo,
} from '../assets/images'

export const skillCategories = [
  { key: 'frontend', count: 9 },
  { key: 'backend', count: 9 },
  { key: 'devops', count: 5 },
  { key: 'testing', count: 2 },
  { key: 'other', count: 4 },
]

export const projects = [
  {
    id: 1,
    image: japanrabbitcom,
    tech: 'Vue, Nuxt, Tailwind, Sanity, Node, Typescript, GraphQL',
    url: 'https://japanrabbit.com/buy-japan',
    git: null,
  },
  {
    id: 2,
    image: japanrabbitlogo,
    tech: 'Robot Framework, Python, Node, Typescript, GraphQL, Hasura',
    url: null,
    git: null,
  },
  {
    id: 3,
    image: jobjob,
    tech: 'Ruby & Rails, Stimulus.js, PostgreSQL, Bootstrap',
    url: 'https://www.youtube.com/embed/yh8iZUNj8B8?start=4380',
    git: 'https://github.com/mthisgaard/jobjob',
  },
  {
    id: 4,
    image: millionplants,
    tech: 'React, Tailwind, GraphQL',
    url: 'https://million-plants.netlify.app/',
    git: 'https://github.com/mthisgaard/million-plants-storefront',
  },
  {
    id: 5,
    image: japanblog,
    tech: 'React, Next, Node, Tailwind, GraphQL',
    url: 'https://japan-blog-zeta.vercel.app/',
    git: 'https://github.com/mthisgaard/react-blog',
  },
  {
    id: 6,
    image: beyond,
    tech: 'React, tailwindcss',
    url: 'https://space-tourism-beyond.netlify.app/',
    git: 'https://github.com/mthisgaard/space-tourism-app',
  },
  {
    id: 7,
    image: oshare,
    tech: 'Rails, Stimulus, PostgreSQL, Bootstrap',
    url: null,
    git: 'https://github.com/mthisgaard/oshare',
  },
]
