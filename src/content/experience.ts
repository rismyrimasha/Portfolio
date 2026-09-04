export type ExperienceKind = 'work' | 'project' | 'education'

export type ExperienceEntry = {
  role: string
  org: string
  period: string
  kind: ExperienceKind
  points: string[]
  stack?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-stack Developer Intern',
    org: 'At e Soft Computer Systems (Pvt) Ltd',
    period: 'Feb 2026 – Present',
    kind: 'work',
    points: [
      'Building ERP and POS systems for business clients.',
      'Flutter applications backed by PHP / MySQL services.',
      'Working day-to-day in a team — feature branches, code review, releases.',
    ],
    stack: ['Flutter', 'Dart', 'PHP', 'MySQL'],
  },
  {
    role: 'Distributed-Health — clinic platform',
    org: 'SLIIT group project · team of 5',
    period: '2026',
    kind: 'project',
    points: [
      'NestJS microservices behind an API gateway, with Keycloak auth and a Next.js frontend.',
      'Owned doctor-service and patient-service end to end: CRUD, role-guarded access, service-to-service calls, and Firebase signed-URL uploads.',
      'Appointment notifications by email and SMS via Resend and Twilio.',
    ],
    stack: ['NestJS', 'MongoDB', 'Docker', 'REST'],
  },
  {
    role: 'BSc (Hons) in Information Technology — Software Engineering',
    org: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '3rd year · completing 2027',
    kind: 'education',
    points: [
      'Specialising in Software Engineering.',
      'Coursework across distributed systems, databases, QA, and application frameworks.',
    ],
  },
]
