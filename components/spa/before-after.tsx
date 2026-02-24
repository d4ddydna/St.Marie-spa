"use client"

import { motion } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import Image from "next/image"

const sliderPairs = [
  {
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/before%201-qABHXGJUTq1WB9iyrSLActSxfDdEXP.jpg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/after%201-EnaRpGCGHGQOWGKfvTtWLlvetgdZPu.jpg",
    label: "Client 1 -- Body Contouring Results",
  },
  {
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/before%202-D9aLoH3DKFgl8QJglbDc1H155CFh5w.jpg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/after%202-ggs3ngjniFbCKmlKw9nBE4byev0A7K.jpg",
    label: "Client 2 -- 6 Sessions, Visible Results",
  },
]

const moreResults = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ec1b78d4-0644-45c8-9f82-35b778d14e5d-rgubNsqRq0CtwqWuNaI2hYSXG4mShu.jpg",
    alt: "Before and after body contouring - side view, 6 sessions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25c7edc0-4c85-42ff-ad75-e9581157b609-dJBKXiBAChX7DX79IrZ3fx3xLAuDPW.jpg",
    alt: "7 inches down and feeling great - real client results",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aMf8BEJlorWYP6Dh83e12eg7DHflWe.png",
    alt: "Before and after collage - multiple angles",
  },
]

function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string
  after: string
  label: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = (x / rect.width) * 100
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full cursor-col-resize select-none overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After image (full) */}
        <Image
          src={after}
          alt="After treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={before}
            alt="Before treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>

        {/* Slider line & handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-lg backdrop-blur-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-foreground"
            >
              <path
                d="M6 4L2 10L6 16M14 4L18 10L14 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          After
        </span>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

export function BeforeAfter() {
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
            Drag the slider to compare before and after photos from our clients. Results achieved
            through our 6-session treatment programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2"
        >
          {sliderPairs.map((pair) => (
            <BeforeAfterSlider
              key={pair.label}
              before={pair.before}
              after={pair.after}
              label={pair.label}
            />
          ))}
        </motion.div>

        {/* More Results Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
            More Results
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {moreResults.map((result) => (
              <div
                key={result.alt}
                className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-md"
              >
                <Image
                  src={result.src}
                  alt={result.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
