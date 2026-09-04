import type { Lens } from '@/lens'

/** The lens-reactive line under the switch in the hero. */
export const heroNow: Record<Lens, string> = {
  engineering:
    'Right now: building ERP and POS features at At e Soft in Flutter and PHP/MySQL.',
  qa: 'Right now: adding real test suites to services that shipped without them.',
  product:
    'Right now: writing the PRD and choosing the metric before any code gets written.',
}
