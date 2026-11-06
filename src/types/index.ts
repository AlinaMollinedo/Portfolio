export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  type: 'web' | 'mobile' | 'navigation'
  imageAlt: string
  linkLabel?: string
}

export interface Skill {
  name: string
  level?: 'familiar' | 'proficient' | 'advanced'
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface Interest {
  title: string
  description: string
  icon: string
  accentColor?: string
}

export interface TimelineEntry {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: 'experience' | 'education' | 'activity'
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export type Theme = 'light' | 'dark'
