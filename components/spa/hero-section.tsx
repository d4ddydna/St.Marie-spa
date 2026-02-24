"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const headlineWords = ["Sculpt.", "Lift.", "Tone.", "Without", "Surgery."]

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/hero-spa.jpg"
          alt="Luxury spa treatment room at Spa St. Marie"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Ambient Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] z-[1] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-[5%] z-[1] h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/70"
          >
            Cote St. Luc, Montreal
          </motion.p>

          <h1 className="mb-8 font-serif text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.12,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`inline-block ${i < 3 ? "mr-3 md:mr-5" : "mr-3 md:mr-5"} ${
                  i === 4 ? "text-secondary" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Advanced EMS facials & body contouring treatments designed for real, visible results
            -- without surgery, without downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#results">See Real Results</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
