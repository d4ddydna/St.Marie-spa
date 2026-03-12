"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/spa/navbar"
import { Footer } from "@/components/spa/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl mb-8">
              Terms of Service
            </h1>
            <p className="text-sm font-medium text-primary mb-12 uppercase tracking-widest">
              Last Updated: March 12, 2026
            </p>

            <div className="prose prose-slate prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
              <section>
                <p>
                  Welcome to Spa St. Marie. By booking a session or using our website, you agree to comply with and be bound by the following terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Services Provided</h2>
                <p>
                  Spa St. Marie provides non-invasive aesthetic treatments, including EMS facials, body contouring, and non-surgical booty lifts. These treatments are designed for muscle stimulation and toning and are not surgical procedures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Results Disclaimer</h2>
                <p>
                  Results from our treatments may vary based on individual body types, lifestyle, and adherence to recommended session frequency. While we strive to help you achieve your goals, we do not guarantee specific outcomes. Treatment plans are tailored to individual needs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Booking and Cancellation Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Appointments:</strong> Booking is subject to availability.</li>
                  <li><strong>Cancellations:</strong> We require at least 24 hours' notice for cancellations or rescheduling. Failure to provide notice may result in a cancellation fee or the forfeiture of a session from a prepaid package.</li>
                  <li><strong>Punctuality:</strong> Please arrive on time. Late arrivals may result in shortened treatment times to avoid affecting subsequent clients.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Pricing and Payments</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prices are subject to change but will be honored for prepaid packages at the time of purchase.</li>
                  <li>All payments are due at the time of service or package purchase.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Medical Considerations</h2>
                <p>
                  Clients are responsible for informing Spa St. Marie of any medical conditions, allergies, or contraindications (such as pregnancy or certain medical implants) before beginning any treatment. Certain EMS treatments may not be suitable for individuals with specific health conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Liability</h2>
                <p>
                  By receiving treatments at Spa St. Marie, you acknowledge the nature of EMS technology and assume responsibility for your physical well-being. Spa St. Marie and its specialists are not liable for any unforeseen reactions when all safety guidelines and disclosures have been followed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Professional Conduct</h2>
                <p>
                  We reserve the right to refuse service to anyone demonstrating inappropriate behavior or who fails to comply with spa policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Contact Information</h2>
                <p>
                  For questions regarding these terms, please contact Jessy through our official Facebook page: <a href="https://www.facebook.com/mariieejessy" className="text-primary hover:underline">mariieejessy</a>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
