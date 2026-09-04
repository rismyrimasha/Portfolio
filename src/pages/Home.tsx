import { Hero } from '@/components/sections/Hero'
import { Approach } from '@/components/sections/Approach'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Approach />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}
