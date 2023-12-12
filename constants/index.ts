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
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS/SCSS',
      'TypeScript',
      'Vue',
      'Nuxt',
      'Tailwind',
      'React',
      'Next',
      'Figma',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node',
      'postgreSQL',
      'GraphQL',
      'Hasura',
      'Robot Framework',
      'Python',
      'Sanity',
      'Ruby',
      'Rails',
    ],
  },
  {
    title: 'DevOps',
    skills: ['git', 'GitHub', 'Cloudflare', 'Heroku', 'GCP'],
  },
  {
    title: 'Testing',
    skills: ['Cypress', 'Jest'],
  },
  {
    title: 'Soft Skills',
    skills: ['Project Management', 'ShapeUp', 'Data Analysis', 'Collaboration'],
  },
]

export const projects = [
  {
    id: 1,
    name: 'CMS Migration & Fresh Marketing Views',
    image: japanrabbitcom,
    role: 'Project Manager & Full Stack Developer',
    tech: 'Vue, Nuxt, Tailwind, Sanity, Node, Typescript, GraphQL',
    url: 'https://japanrabbit.com/buy-japan',
    git: null,
    description:
      'Transitioned marketing content to a new CMS and crafted fresh views and components to showcase the content, empowering customers with insights on Japanese products and stores.',
  },
  {
    id: 2,
    name: 'Purchasing Automation',
    image: japanrabbitlogo,
    role: 'Project Manager & Full Stack Developer',
    tech: 'Robot Framework, Python, Node, Typescript, GraphQL, Hasura',
    url: null,
    git: null,
    description:
      'Spearheaded the relaunch of Robotic Process Automations (RPAs) for purchasing, integrating them with the Japan Rabbit app via custom API endpoints, automating more than 10% of purchasing, with more bots to come.',
  },
  {
    id: 3,
    name: 'JobJob',
    image: jobjob,
    role: 'Project Manager & Full Stack Developer',
    tech: 'Ruby & Rails, Stimulus.js, PostgreSQL, Bootstrap',
    url: 'https://www.youtube.com/embed/yh8iZUNj8B8?start=4380',
    git: 'https://github.com/mthisgaard/jobjob',
    description:
      'Single-page app to track job applications. Add jobs manually, from in-app job suggestions, or from LinkedIn using a chrome extension. Add tasks, notes, and docs, and update application status.',
  },
  {
    id: 4,
    name: 'Million Plants',
    image: millionplants,
    role: 'Solo Full Stack Developer',
    tech: 'React, Tailwind and GraphQL',
    url: 'https://million-plants.netlify.app/',
    git: 'https://github.com/mthisgaard/million-plants-storefront',
    description:
      "Customized Shopify storefront created with Hydrogen's React-based framework.",
  },
  {
    id: 5,
    name: 'Japan Blog',
    image: japanblog,
    role: 'Solo Full Stack Developer',
    tech: 'React, Next, Node, Tailwind and GraphQL',
    url: 'https://japan-blog-zeta.vercel.app/',
    git: 'https://github.com/mthisgaard/react-blog',
    description:
      'Full-Stack blog site with categories, featured post carousel, recent posts on the front page, and related posts and comment sections for each post.',
  },
  {
    id: 6,
    name: 'Beyond',
    image: beyond,
    role: 'Solo Full Stack Developer',
    tech: 'React, tailwindcss',
    url: 'https://space-tourism-beyond.netlify.app/',
    git: 'https://github.com/mthisgaard/space-tourism-app',
    description:
      'Landing page for a fictive space tourism company, built using React and tailwindcss.',
  },
  {
    id: 7,
    name: 'Oshare',
    image: oshare,
    role: 'Project Manager & Full Stack Developer',
    tech: 'Rails, Stimulus, PostgreSQL, Bootstrap',
    url: null,
    git: 'https://github.com/mthisgaard/oshare',
    description:
      'Marketplace app for outfit rentals. Search outfits and browse map of locations. Book outfits, see the calculated total price, and leave a review. List outfits and accept or reject bookings.',
  },
]
