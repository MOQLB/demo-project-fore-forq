import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the welcome heading', () => {
    render(<App />)
    expect(screen.getByText('Welcome to the project')).toBeInTheDocument()
  })

  it('renders the landing section', () => {
    render(<App />)
    expect(document.getElementById('landing')).toBeInTheDocument()
  })
})
