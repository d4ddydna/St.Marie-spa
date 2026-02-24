"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Mail, Clock, DollarSign, Facebook } from "lucide-react"

const benefits = [
  "Personalized treatment plan",
  "Science-backed, proven technology",
  "Zero downtime or recovery",
  "$310 for 6 sessions (save $80)",
]

export function FinalCTA() {
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
              Book your session today and discover the treatments that are right for your goals.
              Email Jessy or message her on Facebook to get started.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="rounded-full bg-white px-10 py-6 text-lg text-primary hover:bg-white/90"
              asChild
            >
              <a href="mailto:Sherrymarie26@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Jessy
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-[#1877F2] px-10 py-6 text-lg text-white hover:bg-[#1877F2]/90"
              asChild
            >
              <a
                href="https://www.facebook.com/jessygetsfit#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Message on Facebook
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4"
          >
            <a
              href="mailto:Sherrymarie26@gmail.com"
              className="text-primary-foreground/70 underline underline-offset-4 transition-colors hover:text-primary-foreground"
            >
              Sherrymarie26@gmail.com
            </a>
          </motion.div>

          {/* Schedule & Pricing Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-10 grid max-w-lg gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-left backdrop-blur-sm sm:grid-cols-2"
          >
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary-foreground">Hours</p>
                <p className="text-sm text-primary-foreground/70">Mon - Thu: 10:30 AM - 2:30 PM</p>
                <p className="text-sm text-primary-foreground/70">Evenings available (last apt 6-7 PM)</p>
                <p className="text-sm text-primary-foreground/70">Fri - Sun: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary-foreground">Pricing</p>
                <p className="text-sm text-primary-foreground/70">6 sessions: $310</p>
                <p className="text-sm text-primary-foreground/70">Single session: $55</p>
              </div>
            </div>
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
