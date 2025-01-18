import {
  jobjob,
  beyond,
  oshare,
  millionplants,
  japanblog,
  japanrabbitcom,
  japanrabbitlogo,
  searchfilter,
  awardfares,
  i18n,
} from '../assets/images'

export const skillCategories = [
  { key: 'frontend', count: 11 },
  { key: 'backend', count: 11 },
  { key: 'automation', count: 3 },
  { key: 'devops', count: 5 },
  { key: 'testing', count: 2 },
  { key: 'other', count: 3 },
]

export const projects = [
  {
    id: 1,
    image: i18n,
    tech: 'Vue 3, i18next, Typescript, Node, Pug, Express',
    url: 'https://awardfares.com/es',
    git: null,
  },
  {
    id: 2,
    image: awardfares,
    tech: 'Vue 3, Shepherd.js, Typescript, Node',
    url: 'https://awardfares.com/',
    git: null,
  },
  {
    id: 3,
    image: searchfilter,
    tech: 'Vue 3, CSS, Typescript, Node',
    url: 'https://awardfares.com/search',
    git: null,
  },
  {
    id: 4,
    image: japanrabbitcom,
    tech: 'Vue, Nuxt, Tailwind, Sanity, Node, Typescript, GraphQL',
    url: 'https://japanrabbit.com/buy-japan',
    git: null,
  },
  {
    id: 5,
    image: japanrabbitlogo,
    tech: 'Robot Framework, Python, Node, Typescript, GraphQL, Hasura',
    url: null,
    git: null,
  },
  {
    id: 6,
    image: jobjob,
    tech: 'Ruby & Rails, Stimulus.js, PostgreSQL, Bootstrap',
    url: 'https://www.youtube.com/embed/yh8iZUNj8B8?start=4380',
    git: 'https://github.com/mthisgaard/jobjob',
  },
  {
    id: 7,
    image: millionplants,
    tech: 'React, Tailwind, GraphQL',
    url: 'https://million-plants.netlify.app/',
    git: 'https://github.com/mthisgaard/million-plants-storefront',
  },
  {
    id: 8,
    image: japanblog,
    tech: 'React, Next, Node, Tailwind, GraphQL',
    url: 'https://japan-blog-zeta.vercel.app/',
    git: 'https://github.com/mthisgaard/react-blog',
  },
  {
    id: 9,
    image: beyond,
    tech: 'React, tailwindcss',
    url: 'https://space-tourism-beyond.netlify.app/',
    git: 'https://github.com/mthisgaard/space-tourism-app',
  },
  {
    id: 10,
    image: oshare,
    tech: 'Rails, Stimulus, PostgreSQL, Bootstrap',
    url: null,
    git: 'https://github.com/mthisgaard/oshare',
  },
]
