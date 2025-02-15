"use client"

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, canvas.height)
      ;(ctx.fillStyle as CanvasGradient).addColorStop(0, '#0A0F2C')
      ;(ctx.fillStyle as CanvasGradient).addColorStop(1, '#1A1F3C')
    }
    setSize()
    window.addEventListener('resize', setSize)

    // Enhanced Particle system
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      growing: boolean

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = '#4A90E2'
        this.alpha = Math.random() * 0.5 + 0.2
        this.growing = Math.random() > 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1

        // Pulsing effect
        if (this.growing) {
          this.alpha += 0.02
          if (this.alpha >= 0.7) this.growing = false
        } else {
          this.alpha -= 0.02
          if (this.alpha <= 0.2) this.growing = true
        }
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.fillStyle = 'rgba(10, 15, 44, 0.1)' // Creates trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Enhanced connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(74, 144, 226, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom, #0A0F2C, #1A1F3C)'
      }}
    />
  )
} 