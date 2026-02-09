"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.03 + i * 0.008,
    width: 0.3 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Gradient definitions for the brand colors */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a650" stopOpacity="0.15" />
            <stop offset="50%" stopColor="[#06392f]" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="primaryGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a650" stopOpacity="0.2" />
            <stop offset="50%" stopColor="[#06392f]" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#8048FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient id="secondaryGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#8048FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {paths.map((path, index) => {
          const isEven = index % 2 === 0
          const gradientId = isEven ? "primaryGradient" : "secondaryGradient"

          return (
            <motion.path
              key={path.id}
              d={path.d}
              stroke={`url(#${gradientId})`}
              strokeWidth={path.width}
              fill="none"
              className="dark:hidden"
              initial={{
                pathLength: 0.2,
                opacity: 0.4,
                pathOffset: Math.random(),
              }}
              animate={{
                pathLength: [0.2, 1, 0.2],
                opacity: [0.2, path.opacity * 3, 0.2],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          )
        })}

        {/* Dark mode paths */}
        {paths.map((path, index) => {
          const isEven = index % 2 === 0
          const gradientIdDark = isEven ? "primaryGradientDark" : "secondaryGradientDark"

          return (
            <motion.path
              key={`dark-${path.id}`}
              d={path.d}
              stroke={`url(#${gradientIdDark})`}
              strokeWidth={path.width}
              fill="none"
              className="hidden dark:block"
              initial={{
                pathLength: 0.2,
                opacity: 0.4,
                pathOffset: Math.random(),
              }}
              animate={{
                pathLength: [0.2, 1, 0.2],
                opacity: [0.3, path.opacity * 4, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function FloatingPathsBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-0.8} />
      <FloatingPaths position={0.6} />

      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-500/[0.015] to-transparent dark:via-pink-500/[0.025]" />
    </div>
  )
}
