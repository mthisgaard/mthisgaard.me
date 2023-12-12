export type Project = {
  id: number
  name: string
  image: string
  role: string
  tech: string
  url: string | null
  git: string | null
  description: string
}

export type Skill = {
  title: string
  skills: string[]
}
