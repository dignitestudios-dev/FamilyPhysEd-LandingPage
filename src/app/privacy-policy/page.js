import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Lock, Eye, FileText, Phone, Mail, Calendar } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Family Phys. Ed.",
  description:
    "Privacy Policy for Family Phys. Ed. explaining how we collect, use, store, and protect your personal information in compliance with CCPA and COPPA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white flex flex-col selection:bg-[#FDFC22] selection:text-black">
      <Navbar />

      <main className="flex-1 relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FDFC22]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-sm font-semibold transition-all group"
            >
              <ArrowLeft className="w-4 h-4 text-[#FDFC22] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-12 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFC22]/10 border border-[#FDFC22]/30 text-[#FDFC22] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Shield className="w-3.5 h-3.5" />
              Privacy & Data Protection
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Privacy Policy for{" "}
              <span className="font-black text-yellow-gradient drop-shadow-[0_0_25px_rgba(253,252,34,0.35)]">
                Family Phys. Ed.
              </span>
            </h1>
            <div className="flex items-center gap-2 text-white/70 font-medium text-sm sm:text-base">
              <Calendar className="w-4 h-4 text-[#FDFC22]" />
              <span>Effective Date: <strong className="text-[#FDFC22]">07/18/2025</strong></span>
            </div>
          </div>

          {/* Main Content Glass Card */}
          <div className="bg-[#242426]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl text-white/85 text-base sm:text-lg leading-relaxed space-y-10">
            <p className="lead text-lg sm:text-xl text-white font-medium border-l-4 border-[#FDFC22] pl-4 py-1 bg-white/5 rounded-r-xl">
              Family Phys. Ed. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of our users&apos; personal information. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with applicable laws, including the California Consumer Privacy Act (CCPA) and the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  1
                </span>
                Information We Collect
              </h2>
              <p>We collect the following types of information to provide and enhance our services:</p>

              <div className="space-y-6 mt-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                    Personal Identifiable Information (PII)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                    <li><strong className="text-white">For Customers:</strong> Name or username, email address, phone number, mailing address, profile picture, and activity level.</li>
                    <li><strong className="text-white">For Coaches:</strong> Name, email address, phone number, mailing address, profile picture, certifications, and experience-related data that you upload.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                    Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                    <li>While we do not directly collect data about your device (such as IP address or browser information), certain data may be collected by the app stores (Apple App Store, Google Play Store) as per their respective privacy policies.</li>
                    <li>We store your booking history and upcoming sessions, which can be viewed through your profile.</li>
                    <li>We utilize general analytics to track customer numbers and coach availability. This data helps us ensure that the appropriate number of coaches are hired in each area.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                    Transaction Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                    <li>We collect payment information (e.g., credit card details) and other transaction-related data when making or receiving payments within the app.</li>
                    <li>Stripe handles payment processing securely through its API. Coaches and users enter their payment information directly into the app, and they have the ability to update, add, or delete their card information at any time via the app&apos;s account settings.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                    Communication Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                    <li>We store chat logs between customers and coaches to facilitate communication and service delivery.</li>
                    <li>We also maintain reviews left by customers for coaches.</li>
                    <li>Customers can contact us directly via email through the app for any issues or inquiries.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDFC22]" />
                    Location Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                    <li>We use location services to show coaches within a customer&apos;s set radius and enable coaches to set session locations.</li>
                    <li>Customers can create private session requests that are sent as bids to coaches within their radius, or view a list of public sessions created by coaches that they can sign up for.</li>
                    <li>Coaches can create public sessions or respond to private session requests and see the location of the session for logistical purposes.</li>
                    <li><strong className="text-white">Location Visibility:</strong> Only the location selected for the session will be visible to both the customer and the coach. Addresses are not publicly visible, and location data is only shared as necessary to facilitate the booking and scheduling of sessions.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">To provide and manage services:</strong>
                  <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-white/75">
                    <li>Facilitate the creation of private sessions by matching customers with coaches within their location radius.</li>
                    <li>Allow coaches to set and manage public sessions and respond to private requests.</li>
                    <li>Process payments and facilitate any related financial transactions securely via Stripe. Coaches and users can add, update, or delete their payment information at any time via the app&apos;s account settings.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-white">For marketing and promotional communications:</strong>
                  <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-white/75">
                    <li>With your consent, we may send marketing and promotional emails related to our services, including new features, offers, or updates.</li>
                    <li>You may opt-out of these communications at any time via the settings in the app or through the unsubscribe link in emails.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-white">For operational and legal communications:</strong>
                  <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-white/75">
                    <li>Send alerts related to changes or updates in the Terms of Service, Privacy Policy, or other important operational matters.</li>
                    <li>Communicate with customers and coaches about session details, cancellations, or updates.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  3
                </span>
                Legal Basis for Processing (for Users in the U.S.)
              </h2>
              <p>We process your personal data based on the following legal bases:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-[#FDFC22] mb-2">1. Consent</h3>
                  <p className="text-sm text-white/80">
                    We process personal data for marketing communications only with your explicit consent. You can opt-out at any time via the unsubscribe button or app settings.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-[#FDFC22] mb-2">2. Performance of a Contract</h3>
                  <p className="text-sm text-white/80">
                    Facilitating private sessions, processing payments via Stripe, and managing coach-customer communication.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-[#FDFC22] mb-2">3. Legal Obligations</h3>
                  <p className="text-sm text-white/80">
                    Complying with statutory requirements such as transaction records for accounting, taxes, and dispute resolution.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-[#FDFC22] mb-2">4. Legitimate Business Interests</h3>
                  <p className="text-sm text-white/80">
                    Improving app quality, capacity planning for coach availability, and maintaining customer support logs.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  4
                </span>
                Data Sharing and Disclosure
              </h2>
              <p>We do not sell, rent, or lease your personal data. We may share your information with trusted third-party service providers solely for operational purposes, under strict confidentiality agreements:</p>
              
              <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#FDFC22]">
                <li><strong className="text-white">Payment Processing (Stripe):</strong> Stripe securely processes in-app payments under PCI-DSS standards and its own privacy terms.</li>
                <li><strong className="text-white">App Maintenance & Engineering (Dignite Studios):</strong> Contracted under strict non-disclosure to perform maintenance, updates, and troubleshooting.</li>
                <li><strong className="text-white">Legal Obligations:</strong> Disclosed only if required by valid subpoena, court order, or fraud prevention authority.</li>
                <li><strong className="text-white">No Other Sharing:</strong> We do not share your personal data with any outside advertisers or third-party brokers.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  5
                </span>
                Data Retention & Deletion
              </h2>
              <p>We retain your personal data for as long as necessary to provide services, comply with accounting and tax regulations, and resolve disputes.</p>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Your Deletion Rights</h3>
                <p className="text-white/80">
                  You have the right to request deletion of your personal data at any time through your account settings or by contacting our team.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  6
                </span>
                Security Measures
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                <li><strong className="text-white">Data Encryption:</strong> End-to-end TLS encryption during transmission.</li>
                <li><strong className="text-white">Access Controls:</strong> Role-based least-privilege access restricted to authorized personnel.</li>
                <li><strong className="text-white">Third-Party Compliance:</strong> SOC and PCI-DSS verified payment partners.</li>
                <li><strong className="text-white">Regular Audits & Training:</strong> Routine vulnerability assessments and security training for staff.</li>
                <li><strong className="text-white">Incident Response:</strong> Swift breach mitigation and user notification procedures.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  7
                </span>
                Your Rights and Choices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">1. Right to Access</strong>
                  <span>Request a copy of your stored records.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">2. Right to Correct</strong>
                  <span>Update incomplete or outdated info via app.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">3. Right to Delete</strong>
                  <span>Request full account and data removal.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">4. Opt-Out of Marketing</strong>
                  <span>Unsubscribe with one click anytime.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">5. Data Portability</strong>
                  <span>Receive records in machine-readable format.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <strong className="text-[#FDFC22] block mb-1">6. Lodge a Complaint</strong>
                  <span>Contact the FTC or your local state attorney.</span>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  8
                </span>
                Children&apos;s Privacy (COPPA Compliance)
              </h2>
              <p>
                Our services are not intended for unsupervised individuals under the age of 13, and we do not knowingly collect personal information directly from children under 13 in accordance with COPPA. Children are welcome to participate in family physical education sessions when registered by a parent or legal guardian.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 marker:text-[#FDFC22]">
                <li><strong className="text-white">Parental Consent:</strong> Parents/guardians provide session details on behalf of participating children.</li>
                <li><strong className="text-white">Coach Training:</strong> Coaches adhere strictly to child safety guidelines and background check protocols.</li>
                <li><strong className="text-white">No Direct Account Creation:</strong> Children under 13 cannot register standalone accounts.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  9
                </span>
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If material changes are made, we will notify users through in-app alerts or email. Continued use of the platform constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  10
                </span>
                Contact Information
              </h2>
              <p>If you have any questions or requests regarding your personal data, reach out to us directly:</p>
              
              <div className="bg-[#1C1C1E] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Family Phys. Ed. Privacy Team</h4>
                  <p className="text-white/60 text-sm">Dedicated data protection assistance.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@familyphysed.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDFC22] text-black font-bold text-sm hover:bg-[#FFFE00] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@familyphysed.com
                  </a>
                  <a
                    href="tel:2156697955"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FDFC22]" />
                    (215) 669-7955
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
