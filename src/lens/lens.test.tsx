import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { LensProvider } from './LensProvider'
import { useLens } from './useLens'

function Probe() {
  const { lens, setLens } = useLens()
  return (
    <div>
      <output data-testid="lens">{lens}</output>
      <button onClick={() => setLens('qa')}>go-qa</button>
    </div>
  )
}

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LensProvider>
        <Probe />
      </LensProvider>
    </MemoryRouter>,
  )
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-lens')
})
afterEach(cleanup)

describe('LensProvider', () => {
  it('defaults to engineering with no param or storage', () => {
    renderAt('/')
    expect(screen.getByTestId('lens')).toHaveTextContent('engineering')
  })

  it('reads the lens from localStorage', () => {
    localStorage.setItem('lens', 'product')
    renderAt('/')
    expect(screen.getByTestId('lens')).toHaveTextContent('product')
  })

  it('lets ?lens= win over storage', () => {
    localStorage.setItem('lens', 'product')
    renderAt('/?lens=qa')
    expect(screen.getByTestId('lens')).toHaveTextContent('qa')
  })

  it('ignores an invalid ?lens= value', () => {
    renderAt('/?lens=marketing')
    expect(screen.getByTestId('lens')).toHaveTextContent('engineering')
  })

  it('persists a change to storage and <html data-lens>', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByText('go-qa'))
    expect(screen.getByTestId('lens')).toHaveTextContent('qa')
    expect(localStorage.getItem('lens')).toBe('qa')
    expect(document.documentElement.dataset.lens).toBe('qa')
  })
})
