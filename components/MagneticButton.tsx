"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { FileText, MessageSquare } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number
  attractRadius?: number
  variant?: "cv" | "connect"
}

interface Particle {
  id: number
  x: number
  y: number
}

export default function MagneticButton({
  className,
  particleCount = 12,
  variant = "cv",
  //   attractRadius = 50,
//   children,
  ...props
}: MagneticButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesControl = useAnimation()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    })
  }, [particlesControl])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }))
  }, [particlesControl, particles])

  const getVariantStyles = () => {
    switch (variant) {
      case "cv":
        return {
          bg: "bg-violet-100 dark:bg-violet-900/30",
          hover: "hover:bg-violet-200 dark:hover:bg-violet-800/40",
          text: "text-violet-600 dark:text-violet-300",
          border: "border border-violet-300 dark:border-violet-700",
          particles: "bg-violet-400 dark:bg-violet-300",
        }
      case "connect":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          hover: "hover:bg-green-200 dark:hover:bg-green-800/40",
          text: "text-green-600 dark:text-green-400",
          border: "border border-green-300 dark:border-green-600",
          particles: "bg-green-400 dark:bg-green-300",
        }
      default:
        return {
          bg: "bg-violet-100 dark:bg-violet-900/30",
          hover: "hover:bg-violet-200 dark:hover:bg-violet-800/40",
          text: "text-violet-600 dark:text-violet-300",
          border: "border border-violet-300 dark:border-violet-700",
          particles: "bg-violet-400 dark:bg-violet-300",
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <Button
      className={cn(
        "min-w-40 relative touch-none",
        styles.bg,
        styles.hover,
        styles.text,
        styles.border,
        "transition-all duration-300",
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index].x, y: particles[index].y }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            styles.particles,
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40",
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        {variant === "cv" ? (
          <FileText className={cn("w-4 h-4 transition-transform duration-300", isAttracting && "scale-110")} />
        ) : (
          <MessageSquare className={cn("w-4 h-4 transition-transform duration-300", isAttracting && "scale-110")} />
        )}
        {isAttracting ? (variant === "cv" ? "View My CV" : "Let's Connect") : ""}
      </span>
    </Button>
  )
}
