import { useEffect, useRef } from 'react'
import './AnimatedGridBackground.css'

function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    function resize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx!.scale(dpr, dpr)
    }

    function draw() {
      if (!canvas || !ctx) return

      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)

      const gridSize = 60
      const cols = Math.ceil(width / gridSize) + 2
      const rows = Math.ceil(height / gridSize) + 2

      // Get the current theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const lineColor = isDark ? 'rgba(124, 58, 237, 0.12)' : 'rgba(124, 58, 237, 0.08)'
      const dotColor = isDark ? 'rgba(167, 139, 250, 0.3)' : 'rgba(124, 58, 237, 0.15)'

      ctx.lineWidth = 0.5

      // Draw vertical lines with wave distortion
      for (let i = 0; i < cols; i++) {
        const baseX = i * gridSize
        ctx.beginPath()
        ctx.strokeStyle = lineColor

        for (let y = 0; y <= height; y += 4) {
          const waveOffset =
            Math.sin(y * 0.008 + time * 0.6 + i * 0.3) * 8 +
            Math.sin(y * 0.004 + time * 0.3) * 4
          const x = baseX + waveOffset

          if (y === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw horizontal lines with wave distortion
      for (let j = 0; j < rows; j++) {
        const baseY = j * gridSize
        ctx.beginPath()
        ctx.strokeStyle = lineColor

        for (let x = 0; x <= width; x += 4) {
          const waveOffset =
            Math.sin(x * 0.008 + time * 0.5 + j * 0.3) * 8 +
            Math.cos(x * 0.004 + time * 0.25) * 4
          const y = baseY + waveOffset

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw glowing dots at intersections
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * gridSize
          const baseY = j * gridSize

          const waveX =
            Math.sin(baseY * 0.008 + time * 0.6 + i * 0.3) * 8 +
            Math.sin(baseY * 0.004 + time * 0.3) * 4
          const waveY =
            Math.sin(baseX * 0.008 + time * 0.5 + j * 0.3) * 8 +
            Math.cos(baseX * 0.004 + time * 0.25) * 4

          const x = baseX + waveX
          const y = baseY + waveY

          // Pulsing opacity per dot
          const pulse = 0.5 + 0.5 * Math.sin(time * 0.8 + i * 0.5 + j * 0.7)
          const radius = 1.5 + pulse * 1

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = dotColor
          ctx.globalAlpha = 0.4 + pulse * 0.6
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }

      time += 0.01
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed - animation will pick it up on next frame
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="animated-grid-background" aria-hidden="true">
      <canvas ref={canvasRef} className="animated-grid-canvas" />
      <div className="animated-grid-fade" />
    </div>
  )
}

export default AnimatedGridBackground
