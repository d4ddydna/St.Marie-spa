"use client"

import { motion } from "framer-motion"
import { Check, Clock, Tag } from "lucide-react"

const pricingTiers = [
  {
    title: "EMS Facial",
    price: "35",
    originalPrice: "45",
    description: "Sculpt and lift your facial contours.",
    features: [
      "30 min Session",
      "Muscle Stimulation",
      "Tighten & Tones",
    ],
    cta: "Book Now",
    popular: false,
  },
  {
    title: "Body & Booty",
    price: "55",
    originalPrice: "65",
    description: "Body contouring or non-surgical booty lift.",
    features: [
      "45 min Body Contouring",
      "OR 30 min Booty Lift",
      "Visible Results",
    ],
    cta: "Book Now",
    popular: false,
  },
  {
    title: "Special Package",
    price: "310",
    originalPrice: "390",
    description: "Our most popular 6-session transformation.",
    features: [
      "6 Targeted Sessions",
      "Progress Tracking",
      "Priority Scheduling",
      "Significant Savings",
    ],
    cta: "Save Today",
    popular: true,
  },
  {
    title: "Infrared Detox",
    price: "40",
    originalPrice: "50",
    description: "Deep infrared heat for total wellness.",
    features: [
      "30 min Session",
      "Detoxification",
      "Muscle Recovery",
    ],
    cta: "Book Now",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Pricing & Packages
          </p>
          <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Affordable Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Premium non-invasive treatments at values that make regular self-care possible.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className={`relative flex flex-col rounded-3xl p-8 shadow-sm ring-1 transition-shadow duration-300 hover:shadow-2xl ${
                tier.popular
                  ? "bg-secondary/30 ring-primary/20"
                  : "bg-card ring-border"
              }`}
            >
              {tier.popular && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground"
                >
                  Best Value
                </motion.span>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground">{tier.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    ${tier.price}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ${tier.originalPrice}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="mb-8 space-y-4 text-sm text-muted-foreground flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-muted/30 p-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>EMS Facial: 30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Booty Lift: 30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Body Contouring: 45 min</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
