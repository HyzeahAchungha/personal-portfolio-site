"use client"

import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  variant?: "hero" | "tools" | "contact"
}

export default function AnimatedBackground({ variant = "hero" }: AnimatedBackgroundProps) {
  const getShapes = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-32 h-32 bg-pink-400/10 rounded-full blur-xl"
              animate={{
                y: [0, 15, 0],
                x: [0, -15, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"
              animate={{
                y: [0, -10, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-400/10 rounded-full blur-xl"
              animate={{
                y: [0, 25, 0],
                x: [0, -10, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3,
              }}
            />
          </>
        )
      case "tools":
        return (
          <>
            <motion.div
              className="absolute top-10 left-1/4 w-3 h-3 bg-primary rounded-full opacity-20"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#06392f]  rounded-full opacity-30"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-10 w-4 h-4 bg-[#06392f]  rounded-full opacity-25"
              animate={{
                x: [0, 40, 0],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )
      case "contact":
        return (
          <>
            <motion.div
              className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-primary/5 to-pink-400/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-green-400/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 0.8, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </>
        )
      default:
        return null
    }
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{getShapes()}</div>
}
