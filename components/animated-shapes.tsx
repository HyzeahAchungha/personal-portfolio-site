"use client"

import { motion } from "framer-motion"

interface AnimatedShapesProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary"
}

export default function AnimatedShapes({ variant = "primary" }: AnimatedShapesProps) {
  const getShapes = () => {
    switch (variant) {
      case "primary":
        return (
          <>
            {/* Circle */}
            <motion.div
              className="absolute top-5 left-96 w-20 h-20 rounded-full border-2 border-primary/20"
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            />

            {/* Square */}
            <motion.div
              className="absolute bottom-20 right-10 w-12 h-12 border-8 border-primary/20 rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Triangle */}
            <motion.div
              className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-primary/20 border-r-[10px] border-r-transparent"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Dots */}
            {/* <motion.div className="absolute bottom-1/3 left-1/4 flex space-x-1">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-8 rounded-full bg-primary/30"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1.5] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div> */}
          </>
        )
      case "secondary":
        return (
          <>
            {/* Hexagon (simplified) */}
            <motion.div
              className="absolute top-20 right-20 w-16 h-16 bg-transparent border-2 border-pink-400/20 rounded-xl rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Cross */}
            <motion.div className="absolute bottom-20 left-20 flex">
              <motion.div
                className="absolute w-12 h-3 bg-blue-400/20 rounded-full"
                animate={{ rotate: [0, 180, 360] }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-3 h-12 bg-blue-400/20 rounded-full"
                animate={{ rotate: [0, 180, 360] }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Zigzag */}
            <motion.svg
              className="absolute top-1/3 left-1/4 w-20 h-10 opacity-20"
              viewBox="0 0 100 50"
              animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <path d="M0,25 L20,0 L40,25 L60,0 L80,25 L100,0" fill="none" stroke="#00a650" strokeWidth="2" />
            </motion.svg>
          </>
        )
      case "tertiary":
        return (
          <>
            {/* Curved line */}
            <motion.svg
              className="absolute top-20 left-20 w-24 h-24 opacity-20"
              viewBox="0 0 100 100"
              animate={{ rotate: [0, 180, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <path d="M10,50 Q50,10 90,50 T10,50" fill="none" stroke="#00a650" strokeWidth="2" />
            </motion.svg>

            {/* Pulsing circle */}
            <motion.div
              className="absolute bottom-20 right-20 w-20 h-20 rounded-full border-2 border-green-400/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Random dots */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/30"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )
      case "quaternary":
        return (
          <>
            {/* Rotating squares */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 border-2 border-primary/20"
                style={{
                  top: `${20 + i * 25}%`,
                  left: `${70 - i * 30}%`,
                }}
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 10 + i * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Floating triangles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-orange-400/20 border-r-[15px] border-r-transparent"
                style={{
                  bottom: `${30 + i * 20}%`,
                  right: `${20 + i * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 8 + i * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )
      default:
        return null
    }
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{getShapes()}</div>
}
