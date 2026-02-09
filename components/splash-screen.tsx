"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 150

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      twinkle: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Mix of purple, white, and pink stars
        const colors = [
          "rgb(0, 166, 80)",  // Green
          "rgba(234, 39, 136, 0.7)", // Pink
          "rgba(255, 255, 255, 0.4)", // Soft white
           "rgb(0, 166, 80)",// Green
           "rgb(6, 57, 47)", //tiber
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkle = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.twinkle += 0.02

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return

        // Create twinkling effect
        const twinkleOpacity = (Math.sin(this.twinkle) + 1) * 0.5
        const currentOpacity = this.opacity * twinkleOpacity

        // Draw star shape
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.twinkle * 0.1)

        // Star with 5 points
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5
          const x = Math.cos(angle) * this.size
          const y = Math.sin(angle) * this.size
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }

          // Inner points
          const innerAngle = ((i + 0.5) * Math.PI * 2) / 5
          const innerX = Math.cos(innerAngle) * (this.size * 0.4)
          const innerY = Math.sin(innerAngle) * (this.size * 0.4)
          ctx.lineTo(innerX, innerY)
        }
        ctx.closePath()

        // Apply color with opacity
        const colorWithOpacity = this.color.replace(/[\d.]+\)$/g, `${currentOpacity})`)
        ctx.fillStyle = colorWithOpacity
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = this.size * 2
        ctx.fill()

        ctx.restore()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0a0a")
      gradient.addColorStop(0.5, "#1a0a2e")
      gradient.addColorStop(1, "#16213e")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Auto-hide splash screen after 8 seconds (extended for new animation)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 900) // Wait for exit animation
    }, 9000)//8seconds

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            {/* Logo/Name with Slice Animation */}
            <motion.div
              className="mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="mb-4 text-6xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl relative overflow-hidden">
                {/* PRECIOUS - Appears first with gentle fade and scale */}
                <motion.div
                  className="bg-gradient-to-r from-white via-purple-200 to-primary bg-clip-text text-transparent inline-block"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: "easeOut",
                  }}
                >
                  HYZEAH
                </motion.div>

                {/* Space between names */}
                <span className="inline-block w-4" />

                {/* Hyzeal - Slices in from the right with dramatic effect */}
                <div className="inline-block relative overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary [#06392f] to-[#ADD8E6] bg-clip-text text-transparent inline-block"
                    initial={{
                      x: 200,
                      opacity: 0,
                      skewX: -15,
                      scale: 1.2,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      skewX: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 1.8, // Appears after Achungha is settled
                      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for slice effect
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                    }}
                  >
                    ACHUNGHA
                  </motion.div>

                  {/* Slice effect overlay - creates the cutting/slicing visual */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    initial={{
                      x: -100,
                      scaleX: 0,
                    }}
                    animate={{
                      x: 100,
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1.8,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "left center",
                    }}
                  />
                </div>
              </div>

              {/* Gradient line appears after both names */}
              <motion.div
                className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-[600px] text-lg text-gray-300 sm:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
               Full-Stack Web & Mobile Developer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="mt-4 max-w-[500px] text-sm text-gray-400 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
Full Stack Web and Mobile Developer | Training and mentoring women in tech to create impactful digital solutions.            </motion.p>

            {/* Loading indicator */}
            <motion.div
              className="mt-12 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.4 }}
            >
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-400">Loading portfolio...</span>
            </motion.div>

            {/* Skip button */}
            <motion.button
              className="absolute bottom-8 right-8 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.6 }}
              onClick={() => {
                setIsVisible(false)
                setTimeout(onComplete, 300)
              }}
            >
              Skip intro →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
