import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'

describe('App', () => {
  it('renders the hero headline on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    const matches = screen.getAllByText(/actionable intelligence/)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('renders the landing section on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('landing')).toBeInTheDocument()
  })

  it('renders the features section on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('features')).toBeInTheDocument()
  })

  it('renders the MosaiqLabs logo on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    const logos = screen.getAllByText('MosaiqLabs')
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders the ecosystem section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('ecosystem')).toBeInTheDocument()
  })

  it('renders the security section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('security')).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('faq')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('testimonials')).toBeInTheDocument()
  })

  it('renders the why-mosaiqlabs comparison section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('why-mosaiqlabs')).toBeInTheDocument()
  })

  it('renders the trusted-by section', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(document.getElementById('trusted-by')).toBeInTheDocument()
  })

  it('renders the about page when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByText(/demo project powered by React and Vite/)).toBeInTheDocument()
  })

  it('renders landing page navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getAllByRole('link', { name: 'Features' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get Started' }).length).toBeGreaterThan(0)
  })
})
