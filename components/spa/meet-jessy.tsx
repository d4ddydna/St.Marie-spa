"use client"

import { motion, useSpring, useMotionValue, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import Image from "next/image"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 30 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
    return unsubscribe
  }, [springValue, suffix])

  return <span ref={ref}>{"0" + suffix}</span>
}

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 4000, suffix: "+", label: "Treatments Delivered" },
]

export function MeetJessy() {
  return (
    <section id="about" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/jessy-portrait.jpg"
                alt="Jessy, founder of Spa St. Marie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-xl lg:-right-10">
              <p className="font-serif text-2xl font-semibold text-primary">
                <AnimatedCounter target={500} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground">Happy clients & counting</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Meet Jessy
            </p>
            <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Passionate about helping you feel your best
            </h2>
            <div className="mb-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a Montreal native and body sculpting specialist, Jessy founded Spa St. Marie
                with a simple mission: give every woman access to treatments that actually work
                -- without the risks, recovery, or price tag of surgery.
              </p>
              <p>
                With over 8 years of experience in non-surgical aesthetics, she has personally
                helped hundreds of women transform their confidence. Every client who walks
                through our doors receives the same care, honesty, and dedication that Jessy
                would want for herself.
              </p>
              <p>
                {`"I don't believe in one-size-fits-all. Every body is different, and every
                treatment plan should be, too. My job is to listen to your goals and guide you
                to the results you deserve."`}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
