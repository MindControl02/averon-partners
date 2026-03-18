import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Averon Partners",
  description: "Terms of Service for Averon Partners. Read our terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <main className="bg-dark-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-accent-blue hover:text-accent-blue-light transition-colors mb-10"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-dark-400 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-dark-200">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the Averon Partners website and services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all the terms and conditions, you may not access or use our services. These Terms apply to all visitors, users, and potential clients.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Description of Services</h2>
            <p>Averon Partners provides B2B client acquisition services for IT and technology companies, including prospect identification, decision-maker outreach, meeting generation, and early-stage deal support. The specific scope, deliverables, and terms of any engagement will be defined in a separate service agreement.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, icons, images, and software — is the property of Averon Partners or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You agree to provide accurate and complete information when submitting inquiries or forms.</li>
              <li>You agree not to use our website for any unlawful or unauthorized purposes.</li>
              <li>You agree not to attempt to gain unauthorized access to our systems or data.</li>
              <li>You are responsible for maintaining the confidentiality of any communications with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive business information shared during the course of discussions or engagements. Specific confidentiality obligations will be detailed in individual service agreements or non-disclosure agreements as applicable.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Averon Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Disclaimers</h2>
            <p>Our website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Averon Partners makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of any information on this website. We do not guarantee specific business outcomes or results from our consulting services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts. The specific governing law and jurisdiction will be detailed in individual service agreements.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Modifications</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website following any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
            <p>For questions about these Terms of Service, please contact us at: <a href="mailto:contact@averon-partners.com" className="text-accent-blue hover:underline">contact@averon-partners.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
