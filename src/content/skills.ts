import type { Lens } from '@/lens'

export type SkillGroup = {
  title: string
  items: string[]
  /** Which lenses this group is most relevant to (drives emphasis, not visibility). */
  lenses: Lens[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'PHP', 'Dart', 'Java', 'SQL'],
    lenses: ['engineering'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Flutter', 'Tailwind CSS', 'React Router'],
    lenses: ['engineering'],
  },
  {
    title: 'Backend & data',
    items: ['NestJS', 'PHP', 'MySQL', 'MongoDB', 'REST APIs', 'Firebase'],
    lenses: ['engineering'],
  },
  {
    title: 'Testing & QA',
    items: [
      'Vitest',
      'Jest',
      'Testing Library',
      'Test plans',
      'Exploratory testing',
      'Bug reporting',
    ],
    lenses: ['qa'],
  },
  {
    title: 'Product',
    items: [
      'PRDs & specs',
      'User stories',
      'Scoping & prioritisation',
      'Roadmapping',
      'Figma (basics)',
    ],
    lenses: ['product'],
  },
  {
    title: 'Delivery & tooling',
    items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Postman', 'Vercel', 'Linux / CLI'],
    lenses: ['engineering', 'qa'],
  },
]
