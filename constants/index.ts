import {
  japanrabbitcom,
  japanrabbitlogo,
  i18n,
  tour,
  form,
  programs,
  emails,
} from '../assets/images'

export const skillCategories = [
  { key: 'frontend', count: 8 },
  { key: 'backend', count: 7 },
  { key: 'automation', count: 3 },
  { key: 'devops', count: 4 },
  { key: 'testing', count: 2 },
  { key: 'other', count: 4 },
]

export const projects = [
  {
    id: 1,
    image: programs,
    tech: 'Typescript, Node, Puppeteer, Playwright',
    url: 'https://awardfares.com/programs',
    git: null,
  },
  {
    id: 2,
    image: i18n,
    tech: 'Vue 3, i18next, Typescript, Node, Pug, Express',
    url: 'https://awardfares.com/es',
    git: null,
  },
  {
    id: 3,
    image: emails,
    tech: 'Typescript, Node, React, JSX, Brevo',
    url: 'https://awardfares.com/',
    git: null,
  },
  {
    id: 4,
    image: form,
    tech: 'Vue 3, HTML, Typescript',
    url: 'https://awardfares.com/signup',
    git: null,
  },
  {
    id: 5,
    image: tour,
    tech: 'Vue 3, Shepherd.js, Typescript, Node',
    url: 'https://awardfares.com/',
    git: null,
  },
  {
    id: 6,
    image: japanrabbitcom,
    tech: 'Vue, Nuxt, Tailwind, Sanity, Node, Typescript, GraphQL',
    url: 'https://japanrabbit.com/buy-japan',
    git: null,
  },
  {
    id: 7,
    image: japanrabbitlogo,
    tech: 'Robot Framework, Python, Node, Typescript, GraphQL, Hasura',
    url: null,
    git: null,
  },
]
