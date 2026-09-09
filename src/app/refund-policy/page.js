import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, RefreshCw, Clock, AlertCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Family Phys. Ed.",
  description:
    "Transparent refund and cancellation guidelines for users and coaches at Family Phys. Ed.",
};

export default function RefundPolicyPage() {
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
              <RefreshCw className="w-3.5 h-3.5" />
              Transparent Booking Policies
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Refund & Cancellation Policy for{" "}
              <span className="font-black text-yellow-gradient drop-shadow-[0_0_25px_rgba(253,252,34,0.35)]">
                Family Phys. Ed.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 font-medium">
              Fair and transparent booking, cancellation, and refund rules designed for both families and coaches.
            </p>
          </div>

          {/* Main Content Glass Card */}
          <div className="bg-[#242426]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl text-white/85 text-base sm:text-lg leading-relaxed space-y-10">
            <p className="lead text-lg sm:text-xl text-white font-medium border-l-4 border-[#FDFC22] pl-4 py-1 bg-white/5 rounded-r-xl">
              At Family Phys. Ed., we strive to provide a fair and transparent cancellation and refund policy for both users and coaches. Please review the following guidelines:
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  1
                </span>
                User Cancellations
              </h2>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#FDFC22]">
                  <li>
                    <strong className="text-white">Full Refund (24+ Hours Notice):</strong> Users may cancel their scheduled session up to <strong className="text-[#FDFC22]">24 hours</strong> before the scheduled start time to receive a 100% full refund.
                  </li>
                  <li>
                    <strong className="text-white">Within 24 Hours:</strong> Cancellations made within 24 hours of the start time will not be eligible for a standard refund. This policy is in place to protect our certified coaches from lost time and reserved field/equipment opportunities.
                  </li>
                  <li>
                    <strong className="text-white">Case-by-Case Review:</strong> Partial refunds or session credits may be considered for cancellations made within 24 hours due to emergencies, and will be evaluated on a case-by-case basis by the Family Phys. Ed. support team.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  2
                </span>
                Coach Cancellations
              </h2>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#FDFC22]">
                  <li>
                    <strong className="text-white">Standard Notice:</strong> Coaches may cancel a session up to 24 hours before the scheduled start time without penalty.
                  </li>
                  <li>
                    <strong className="text-white">Guaranteed User Refund:</strong> If a coach cancels within 24 hours of the scheduled start time, the user will automatically receive an immediate 100% full refund or priority rescheduling credit.
                  </li>
                  <li>
                    <strong className="text-white">Quality Assurance System:</strong> Coaches who cancel within 24 hours will be subject to account warnings. Coaches may receive up to three warnings before further disciplinary action is taken, including potential suspension or removal from the platform to maintain highest quality reliability for families.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  3
                </span>
                Exceptional Circumstances
              </h2>
              <div className="bg-[#1C1C1E] border border-white/10 p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-[#FDFC22] font-bold">
                  <AlertCircle className="w-5 h-5" />
                  <span>Unforeseen Events & Emergencies</span>
                </div>
                <p className="text-white/80">
                  We understand that unpredictable life events, sudden illness, or extreme weather can sometimes interfere with plans. If a user or coach needs to cancel within 24 hours under special circumstances, we encourage you to reach out via our in-app chat or email to explain the situation.
                </p>
                <div className="flex items-center gap-2 text-white/60 text-sm mt-2">
                  <Clock className="w-4 h-4 text-[#FDFC22]" />
                  <span>Responses to special cancellation requests typically take 24–48 business hours.</span>
                </div>
              </div>
            </section>

            {/* Support CTA */}
            <section className="pt-4 border-t border-white/10">
              <div className="bg-[#1C1C1E] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Need help with a booking or refund?</h4>
                  <p className="text-white/60 text-sm">Our support team is ready to assist you.</p>
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
