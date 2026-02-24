"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const results = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ec1b78d4-0644-45c8-9f82-35b778d14e5d-rgubNsqRq0CtwqWuNaI2hYSXG4mShu.jpg",
    alt: "Before and after body contouring - 6 sessions",
    caption: "Body Contouring -- 6 sessions over 3 weeks",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25c7edc0-4c85-42ff-ad75-e9581157b609-dJBKXiBAChX7DX79IrZ3fx3xLAuDPW.jpg",
    alt: "7 inches down and feeling great - real client results",
    caption: "7 inches down -- real client results",
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
            Real before and after photos from our clients. Results achieved through our 6-session
            treatment programs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {results.map((result) => (
            <motion.div
              key={result.alt}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={result.image}
                  alt={result.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">{result.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Treatment photos gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Treatments in Action
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0ddc0390-8e13-42c0-b3f9-65e0745c6a6d-oUHg4hyYOBsIHBSU1RLT8A64a1umqy.jpg",
                alt: "EMS body contouring treatment session",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5957bbfe-dfae-4413-a7dc-bca0f067097f-p9GrF5bJ6y9nbLmSVuXdHKUsoBnNaE.jpg",
                alt: "EMS belly treatment session",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a22747e4-049d-44b0-bf16-22f7575671c1-cV94D0BTwK6He4R9elCA8dpp7OiBNm.jpg",
                alt: "EMS booty lift treatment session",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d7018526-564d-421d-9306-403a0c68dfe1-n97rx5Iag2vgwvmoOnCgWYdTereozm.jpg",
                alt: "Spa St. Marie treatment room",
              },
            ].map((photo) => (
              <div key={photo.alt} className="relative aspect-square overflow-hidden rounded-xl border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
