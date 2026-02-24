"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "EMS Facial",
    description:
      "Sculpt and lift your facial contours with advanced electrical muscle stimulation. Tighten skin, reduce fine lines, and reveal a naturally lifted look.",
    image: "/images/service-ems-facial.jpg",
    tag: "Most Popular",
  },
  {
    title: "Body Contouring",
    description:
      "Target stubborn areas with precision technology that reduces fat cells and tightens skin for a smoother, more sculpted silhouette.",
    image: "/images/service-body-contouring.jpg",
    tag: "Best Seller",
  },
  {
    title: "Non-Surgical Booty Lift",
    description:
      "Lift, firm, and shape your glutes without surgery. Our EMS-based treatment builds and tones muscle for a natural, lifted result.",
    image: "/images/service-booty-lift.jpg",
    tag: "Trending",
  },
  {
    title: "Infrared Body Wrap",
    description:
      "Deep infrared heat promotes detoxification, reduces water retention, and soothes muscles while you relax in total comfort.",
    image: "/images/service-infrared.jpg",
    tag: "Wellness",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export function ServicesOverview() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Treatments
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Signature services
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Each treatment is carefully selected for proven effectiveness and tailored to deliver
            the results Montreal women are looking for.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.a
              key={service.title}
              href="#contact"
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>
              <div className="p-6 lg:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
