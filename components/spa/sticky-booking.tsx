"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Calendar } from "lucide-react"

export function StickyBooking() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisible(latest > 0.15)
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 bottom-4 z-50 md:hidden"
    >
      <a
        href="#contact"
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-95"
      >
        <Calendar className="h-4 w-4" />
        Book Now
      </a>
    </motion.div>
  )
}
