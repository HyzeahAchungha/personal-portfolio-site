"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function EyeOpeningSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative h-[20vh] min-h-[400px] overflow-hidden bg-black">
      {/* Eye Background Image - Responsive */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "ellipse(0% 0% at 50% 50%)" }}
        animate={isInView ? { clipPath: "ellipse(100% 100% at 50% 50%)" } : { clipPath: "ellipse(0% 0% at 50% 50%)" }}
        transition={{
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth eye opening
        }}
      >
        <Image
          src="/achungha.jpg"
          alt="Eye background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Large Gray Text - Exactly like OnlyDust */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-center font-black tracking-tight text-gray-500 leading-none select-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 12rem)",
            fontWeight: 900,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 1.5,
            delay: 1.2, // Delay to start after eye begins opening
            ease: "easeOut",
          }}
        >
          HYZEAL
          <br />
          ACHUNGHA
        </motion.h1>
      </div>

      {/* Enhanced Glitter/Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large sparkles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 50}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Medium sparkles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute w-1.5 h-1.5 bg-white/80 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.3px)",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Small sparkles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 0.8, 0],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Tiny sparkles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`tiny-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 0.5, 0],
            }}
            transition={{
              duration: 0.8 + Math.random() * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 1.5,
            }}
          />
        ))}

        {/* Floating glitter particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.2px)",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Diamond-shaped sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute w-2 h-2 bg-white transform rotate-45"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Star-shaped sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-3 h-3 text-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
