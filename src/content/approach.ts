import type { Lens } from '@/lens'

type ApproachCopy = {
  heading: string
  points: string[]
}

/** "How I work" — the switcher's payoff. Fully different content per lens. */
export const approachCopy: Record<Lens, ApproachCopy> = {
  engineering: {
    heading: 'I build the whole slice, not just the screen.',
    points: [
      'Front to back — Flutter and React on top, PHP/MySQL or NestJS underneath, with the API contract between them designed on purpose.',
      'Real teams, real branches: feature branches, pull requests, code review, and a green build before merge.',
      'The repo is part of the work — readable commits, a README that runs, and a live deploy you can click.',
    ],
  },
  qa: {
    heading: 'Quality is a design decision, not a final step.',
    points: [
      'I write the test plan before I trust the feature — scope, risks, the cases that matter, and the environments they run in.',
      'Unit and end-to-end coverage, with the number reported.',
      'A bug I file comes with a reproduction, the root cause, and the fix — so it closes once.',
    ],
  },
  product: {
    heading: 'Start from the problem and the number.',
    points: [
      'A short PRD for anything non-trivial: who has the problem, the goal, the non-goals, and the one metric that says it worked.',
      'I have built multi-sided systems — POS and ERP for businesses, patient and doctor flows for a clinic platform — where the hard part is whose need wins.',
      'Scope is a choice: cut to the version that moves the metric, and ship that first.',
    ],
  },
}
