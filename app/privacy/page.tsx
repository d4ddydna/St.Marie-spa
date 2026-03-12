"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/spa/navbar"
import { Footer } from "@/components/spa/footer"

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm font-medium text-primary mb-12 uppercase tracking-widest">
              Effective Date: March 12, 2026
            </p>

            <div className="prose prose-slate prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
              <section>
                <p>
                  At Spa St. Marie, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and during your visits to our spa in Cote St. Luc, Montreal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, phone number, and physical characteristics relevant to your treatments (e.g., body measurements for progress tracking) when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Book an appointment through our website or social media.</li>
                  <li>Contact us via email or Facebook.</li>
                  <li>Sign up for our newsletter or promotional offers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and manage your treatments.</li>
                  <li>Schedule and confirm appointments.</li>
                  <li>Track your progress to ensure optimal results.</li>
                  <li>Communicate with you about your sessions and special offers.</li>
                  <li>Improve our services and website experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or disclosure. Your information is only accessible to authorized personnel who need it to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Third-Party Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except for trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p>
                  You have the right to request access to the personal information we hold about you, to request corrections, or to ask for its deletion. If you wish to exercise any of these rights, please contact us via our Facebook page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy, please contact Jessy via our official Facebook page or visit us at our location in Cote St. Luc.
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
