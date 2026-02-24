"use client"

import { motion } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"

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
  {
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ez6Gek2NOVodIDjpoREOOUhwWUXmJV.png",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a571e895-2a24-4566-8915-5465feda2125-MIb4Prc3gHPKXe9Ur1mRz15dfFPuDV.jpg",
    label: "Client 3 -- Slim Wave Body Sculpting",
  },
]

const moreResults = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ec1b78d4-0644-45c8-9f82-35b778d14e5d-rgubNsqRq0CtwqWuNaI2hYSXG4mShu.jpg",
    alt: "Before and after body contouring - side view, 6 sessions",
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
    >
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
          sizes="(max-width: 768px) 100vw, 33vw"
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
            sizes="(max-width: 768px) 100vw, 33vw"
            draggable={false}
          />
        </div>

        {/* Slider line & handle - inspired by reference design */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/80"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular swap handle */}
          <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Before / After pill labels */}
        <span className="absolute top-4 left-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
          Before
        </span>
        <span className="absolute top-4 right-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
          After
        </span>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
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
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
        >
          {sliderPairs.map((pair, i) => (
            <motion.div
              key={pair.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <BeforeAfterSlider
                before={pair.before}
                after={pair.after}
                label={pair.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* More Results Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
            More Results
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {moreResults.map((result, i) => (
              <motion.div
                key={result.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-md"
              >
                <Image
                  src={result.src}
                  alt={result.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
