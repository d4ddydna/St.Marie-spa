"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, FlaskConical } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "No Surgery Required",
    description:
      "Our non-invasive treatments reshape and tone your body without incisions, anesthesia, or recovery time. Walk in on your lunch break, walk out feeling confident.",
  },
  {
    icon: Sparkles,
    title: "Visible Results in 6 Sessions",
    description:
      "Most clients see measurable results within their first few treatments. 6 sessions completed over 3 weeks (twice a week) for optimal, lasting results.",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed Treatments",
    description:
      "Every technology we use is backed by clinical studies and proven results. We only invest in treatments that deliver real, measurable outcomes.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export function WhySection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Why Non-Surgical
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Real results, without going under the knife
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="group cursor-default rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-xl lg:p-10"
            >
              <motion.div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary"
                whileHover={{ rotate: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <reason.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent" />
              </motion.div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
