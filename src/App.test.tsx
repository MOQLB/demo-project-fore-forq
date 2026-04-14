import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByText(/production-ready AI/)).toBeInTheDocument()
  })

  it('renders the landing section', () => {
    render(<App />)
    expect(document.getElementById('landing')).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<App />)
    expect(document.getElementById('features')).toBeInTheDocument()
  })

  it('renders the MosaiqLabs logo', () => {
    render(<App />)
    const logos = screen.getAllByText('MosaiqLabs')
    expect(logos.length).toBeGreaterThan(0)
  })
})
