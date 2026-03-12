"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const headlineWords = ["Glow.", "Sculpt.", "Lift."]

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
      {/* Fixed Background Image (No Scroll) */}
      <div className="absolute inset-0 z-0 h-screen w-full">
        <Image
          src="/BGHERO.jpeg"
          alt="Spa St. Marie floral background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/10" />
        
        {/* Intense Ambient Glows (Inspired by reference) */}
        {/* Right Side Glow - Softened & Pushed further right to clear the subject */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[5%] -right-[15%] h-[600px] w-[600px] rounded-full bg-[#c7bcff] blur-[140px] mix-blend-multiply sm:mix-blend-normal" 
        />
        
        {/* Left Side Glows - Kept strong as requested */}
        <motion.div 
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[10%] h-[800px] w-[800px] rounded-full bg-[#e9d5ff] blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[0%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#ffd8c4] blur-[130px]" 
        />

        {/* Central White Mask for Mobile Clarity */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-60 md:hidden" />
      </div>

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
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#5a2d3a]"
          >
            Cote St. Luc, Montreal
          </motion.p>

          <h1 className="mb-8 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#3a1525] md:text-7xl lg:text-8xl">
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
                className="inline-block mr-3 md:mr-5"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + 3 * 0.12,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="inline-block text-[#7a3a50]"
            >
              {"Confidence starts here."}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#4a2535]/80 md:text-xl"
          >
            Advanced EMS facials, body contouring & booty lifts -- non-invasive treatments
            designed for real, visible results. No surgery, no downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
              asChild
            >
              <a href="#contact">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#5a2d3a]/30 bg-[#5a2d3a]/10 px-8 text-base text-[#3a1525] backdrop-blur-sm hover:bg-[#5a2d3a]/20 hover:text-[#3a1525] transition-transform hover:scale-105 active:scale-95"
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
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#5a2d3a]/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-[#5a2d3a]/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
