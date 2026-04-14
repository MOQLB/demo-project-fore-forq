import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import AnimatedGridBackground from './AnimatedGridBackground'

describe('AnimatedGridBackground', () => {
  let mockContext: Record<string, unknown>
  let rafSpy: ReturnType<typeof vi.spyOn>
  let cafSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    mockContext = {
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      scale: vi.fn(),
      lineWidth: 0,
      strokeStyle: '',
      fillStyle: '',
      globalAlpha: 1,
    }

    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mockContext as unknown as CanvasRenderingContext2D
    )

    rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(1)
    cafSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders the grid background container', () => {
    render(<AnimatedGridBackground />)
    const container = document.querySelector('.animated-grid-background')
    expect(container).toBeInTheDocument()
  })

  it('has aria-hidden attribute for accessibility', () => {
    render(<AnimatedGridBackground />)
    const container = document.querySelector('.animated-grid-background')
    expect(container).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders a canvas element', () => {
    render(<AnimatedGridBackground />)
    const canvas = document.querySelector('.animated-grid-canvas')
    expect(canvas).toBeInTheDocument()
    expect(canvas?.tagName).toBe('CANVAS')
  })

  it('renders the fade overlay', () => {
    render(<AnimatedGridBackground />)
    const fade = document.querySelector('.animated-grid-fade')
    expect(fade).toBeInTheDocument()
  })

  it('initializes canvas context on mount', () => {
    render(<AnimatedGridBackground />)
    expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d')
  })

  it('starts animation on mount', () => {
    render(<AnimatedGridBackground />)
    expect(rafSpy).toHaveBeenCalled()
  })

  it('cancels animation on unmount', () => {
    const { unmount } = render(<AnimatedGridBackground />)
    unmount()
    expect(cafSpy).toHaveBeenCalled()
  })

  it('cleans up resize listener on unmount', () => {
    const removeEventSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<AnimatedGridBackground />)
    unmount()
    expect(removeEventSpy).toHaveBeenCalledWith('resize', expect.any(Function))
  })
})
