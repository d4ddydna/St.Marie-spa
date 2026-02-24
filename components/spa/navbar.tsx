"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f06ea4a5-e6e4-40bd-9b5f-dae84786cedd-bijaWCPNLAnDhCAU0ag1w7X3kzv18l.jpg"
                alt="Spa St. Marie logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span
              className={`font-serif text-2xl font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Spa St. Marie
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-foreground/70" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:Sherrymarie26@gmail.com">Book a Session</a>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-xl md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-serif text-2xl font-medium text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
        <Button
          size="lg"
          className="mt-4 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a href="mailto:Sherrymarie26@gmail.com" onClick={() => setMobileOpen(false)}>
            Book a Session
          </a>
        </Button>
      </motion.div>
    </>
  )
}
