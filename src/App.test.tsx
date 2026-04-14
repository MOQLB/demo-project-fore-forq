import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the quote', () => {
    render(<App />)
    expect(screen.getByText(/In the middle of difficulty lies opportunity/)).toBeInTheDocument()
  })

  it('renders the landing section', () => {
    render(<App />)
    expect(document.getElementById('landing')).toBeInTheDocument()
  })
})
