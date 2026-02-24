import { MapPin, Phone, Mail, Clock } from "lucide-react"

const footerLinks = {
  services: [
    { label: "EMS Facial", href: "#services" },
    { label: "Body Contouring", href: "#services" },
    { label: "Non-Surgical Booty Lift", href: "#services" },
    { label: "Infrared Body Wrap", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Spa St. Marie
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Advanced non-surgical body sculpting and EMS facials in Cote St. Luc, Montreal.
              Science-backed treatments for real, lasting results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Cote St. Luc, Montreal, QC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+15145551234" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (514) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@spastmarie.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  hello@spastmarie.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon - Fri: 9am - 7pm</p>
                  <p>Sat: 10am - 5pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Spa St. Marie. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
