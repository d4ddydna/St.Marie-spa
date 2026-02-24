"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    container: mounted ? undefined : containerRef,
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (!mounted) return <div ref={containerRef} />

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-primary"
      style={{ scaleX }}
    />
  )
}
