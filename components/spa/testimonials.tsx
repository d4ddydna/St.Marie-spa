"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Vittoria M.",
    treatment: "Spa St. Marie Client",
    quote:
      "She's such an amazing person!! Really cares for each and every client. She's very professional, highly educated and highly recommend! xoxo",
    rating: 5,
  },
  {
    name: "Vero N.",
    treatment: "Slim Wave -- Abdomen",
    quote:
      "Just finished up 6 sessions of slim wave targeting my abdomen. I lost 7 inches total, and will have my wedding dress fitting like a glove now. Thanks! Great service, affordable prices. Professional, clean.",
    rating: 5,
  },
  {
    name: "Netzl J.",
    treatment: "Slim Wave Experience",
    quote:
      "I had my first slim wave experience today and it was amazing. I feel great. I'm definitely going back again. Thank you.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    treatment: "Therapeutic Detox Session",
    quote:
      "Spa St. Marie is the place to go for a relaxing, therapeutic detox session. Jessy has great prices hands down, she is very educated in the field and her service is phenomenal. Very clean and zen space, up to par with safety measures! I highly recommend anyone looking for an exceptional service to book an appointment!",
    rating: 5,
  },
  {
    name: "Verified Client",
    treatment: "Ear Candling, EMS Facial, Booty Lift",
    quote:
      "Booking was very easy. The experience was so relaxed. I felt absolutely valued and cared for. The EMS specialist is amazing -- 5 stars! I loved the chat. Would recommend 5 out of 5.",
    rating: 5,
  },
  {
    name: "Verified Client",
    treatment: "EMS Body Contouring",
    quote:
      "Very responsible, professional, and kind. I felt absolutely valued during my visit. What I enjoyed most was the flexibility to schedule the appointments. Would recommend 5 out of 5.",
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
            Client Reviews
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            What our clients say
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Real reviews from real clients on Facebook and our online review forms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
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
