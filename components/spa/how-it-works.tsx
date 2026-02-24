"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Book Your Session",
    description:
      "Reach out by email to book your first appointment. We will discuss your goals and create a plan tailored to you.",
  },
  {
    number: "02",
    title: "Your Treatment Plan",
    description:
      "6 sessions, done twice a week with 1-2 days between sessions, completed over the span of 3 weeks for optimal results.",
  },
  {
    number: "03",
    title: "Relax & Transform",
    description:
      "Sessions last 30-45 minutes depending on the treatment. Relax while our advanced EMS technology works its magic.",
  },
  {
    number: "04",
    title: "See Real Results",
    description:
      "Watch your body transform over the course of your sessions. Clients have seen up to 7 inches lost in a single treatment plan.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export function HowItWorks() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            The Process
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            How it works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid gap-8 md:grid-cols-4"
        >
          {/* Connecting line (desktop only) */}
          <div className="absolute top-12 right-[12.5%] left-[12.5%] hidden h-px bg-border md:block" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/20 bg-card">
                <span className="font-serif text-2xl font-semibold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
