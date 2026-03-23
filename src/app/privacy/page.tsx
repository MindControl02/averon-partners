import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Averon Partners",
  description: "Privacy Policy for Averon Partners. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-light-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-accent-blue hover:text-accent-blue-light transition-colors mb-10"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-light-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-light-500 mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-light-700">
          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">1. Introduction</h2>
            <p>
              Averon Partners (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. By accessing or using our website you agree to the terms outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Data:</strong> Name, email address, company name, phone number, and other contact information you voluntarily provide through our contact forms or email communications.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and timestamps.</li>
              <li><strong>Cookies &amp; Tracking Technologies:</strong> We may use cookies, web beacons, and similar technologies to enhance your experience and gather analytical data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your inquiries and provide our consulting services.</li>
              <li>To communicate with you about meetings, proposals, and service updates.</li>
              <li>To improve our website, content, and service offerings.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
              <li>To send periodic emails related to our services, if you have opted in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">4. Data Sharing &amp; Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting business, subject to confidentiality agreements. We may also disclose your information when required by law or to protect our rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. If you are located in the European Economic Area (EEA), you are entitled to additional rights under the General Data Protection Regulation (GDPR). To exercise your rights, please contact us at <a href="mailto:contact@averon-partners.com" className="text-accent-blue hover:underline">contact@averon-partners.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically for the latest information on our privacy practices.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-light-900 mb-3">9. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:contact@averon-partners.com" className="text-accent-blue hover:underline">contact@averon-partners.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
