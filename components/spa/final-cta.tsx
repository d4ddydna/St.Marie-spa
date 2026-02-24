"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { useState } from "react"

const benefits = [
  "Free consultation with no obligation",
  "Personalized treatment plan",
  "Science-backed, proven technology",
  "Zero downtime or recovery",
]

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to start your transformation?
            </h2>
            <p className="mb-10 text-lg text-primary-foreground/80 leading-relaxed">
              Book your free consultation today and discover which treatments are right for your
              goals. No pressure, no commitment -- just expert guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-primary-foreground">
                  We received your request
                </h3>
                <p className="text-primary-foreground/80">
                  We will be in touch within 24 hours to book your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full bg-white px-8 text-primary hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
