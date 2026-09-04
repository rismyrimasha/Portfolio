import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LensProvider } from '@/lens/LensProvider'
import { Approach } from './Approach'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LensProvider>
        <Approach />
      </LensProvider>
    </MemoryRouter>,
  )
}

beforeEach(() => {
  localStorage.clear()
})

describe('Approach', () => {
  it('shows the engineering heading by default', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { name: /build the whole slice/i }),
    ).toBeInTheDocument()
  })

  it('swaps to the QA heading for ?lens=qa', () => {
    renderAt('/?lens=qa')
    expect(
      screen.getByRole('heading', { name: /quality is a design decision/i }),
    ).toBeInTheDocument()
  })

  it('swaps to the product heading for ?lens=product', () => {
    renderAt('/?lens=product')
    expect(
      screen.getByRole('heading', { name: /the problem and the number/i }),
    ).toBeInTheDocument()
  })
})
