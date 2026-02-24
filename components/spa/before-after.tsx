"use client"

import { motion } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { GripVertical } from "lucide-react"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      handleMove(e.clientX)
    },
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <section id="results" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Real Results
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            See the transformation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Drag the slider to compare before and after results from our body contouring treatments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] cursor-col-resize select-none overflow-hidden rounded-2xl border border-border shadow-xl"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* After Image (full width behind) */}
            <Image
              src="/images/after-treatment.jpg"
              alt="After body contouring treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {/* Before Image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src="/images/before-treatment.jpg"
                alt="Before body contouring treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              After
            </span>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
                <GripVertical className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Body Contouring -- 6 sessions over 8 weeks
          </p>
        </motion.div>
      </div>
    </section>
  )
}
