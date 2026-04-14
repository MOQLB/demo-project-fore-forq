import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the hero headline', () => {
    render(<App />)
    const matches = screen.getAllByText(/production-ready AI/)
    expect(matches.length).toBeGreaterThan(0)
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

  it('renders the security section', () => {
    render(<App />)
    expect(document.getElementById('security')).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(<App />)
    expect(document.getElementById('faq')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(document.getElementById('testimonials')).toBeInTheDocument()
  })
})
