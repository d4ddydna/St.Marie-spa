"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sophie L.",
    treatment: "Body Contouring",
    quote:
      "I was skeptical at first, but after my third session I could already see a difference. By session six, I had lost inches around my waist. I feel like myself again.",
    rating: 5,
  },
  {
    name: "Nadia M.",
    treatment: "EMS Facial",
    quote:
      "My jawline is more defined, my skin feels tighter, and people keep asking what I've done differently. This is the best-kept secret in Montreal.",
    rating: 5,
  },
  {
    name: "Camille R.",
    treatment: "Non-Surgical Booty Lift",
    quote:
      "I never thought I could get results like this without surgery. Jessy made me feel so comfortable, and the results speak for themselves. I'm obsessed.",
    rating: 5,
  },
  {
    name: "Isabelle D.",
    treatment: "Infrared Body Wrap",
    quote:
      "The most relaxing treatment I've ever experienced, and I woke up the next day feeling lighter and less bloated. It's become my monthly self-care ritual.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            What our clients say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative rounded-2xl border border-border bg-card p-8 lg:p-10"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-foreground/90 italic">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
