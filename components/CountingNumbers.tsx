"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CountingNumberProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  startOnView?: boolean
}

export default function CountingNumbers({
  end,
  duration = 2,
  suffix = "",
  className = "",
  startOnView = true,
}: CountingNumberProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Determine if we should start counting
    const shouldStart = startOnView ? isInView : true

    if (shouldStart && !hasAnimated.current) {
      hasAnimated.current = true

      // Start from 0
      setCount(0)

      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)

        // Easing function for smooth counting
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * end)

        setCount(currentCount)

        if (now < endTime) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [end, duration, isInView, startOnView])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
