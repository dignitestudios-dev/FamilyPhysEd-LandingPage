import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, HeartHandshake, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Code of Conduct | Family Phys. Ed.",
  description:
    "Guidelines and expectations for staff, coaches, participants, and families at Family Phys. Ed.",
};

export default function CodeOfConductPage() {
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
              <HeartHandshake className="w-3.5 h-3.5" />
              Community & Safety Guidelines
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Code of Conduct for{" "}
              <span className="font-black text-yellow-gradient drop-shadow-[0_0_25px_rgba(253,252,34,0.35)]">
                Family Phys. Ed.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 font-medium">
              Upholding our mission of fostering health, family connection, and positive experiences.
            </p>
          </div>

          {/* Main Content Glass Card */}
          <div className="bg-[#242426]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl text-white/85 text-base sm:text-lg leading-relaxed space-y-8">
            <p className="lead text-lg sm:text-xl text-white font-medium border-l-4 border-[#FDFC22] pl-4 py-1 bg-white/5 rounded-r-xl">
              At Family Phys. Ed., we are dedicated to creating a fun, inclusive, and healthy environment where families can bond through physical activity. This Code of Conduct outlines our expectations for all staff, coaches, participants, and families to ensure we uphold our mission of fostering health, family connection, and positive experiences.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  1
                </span>
                Respect and Inclusivity
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">Treat Everyone with Kindness:</strong> Treat all participants, families, coaches, and staff with kindness, respect, and encouragement, regardless of age, skill level, or background.
                </li>
                <li>
                  <strong className="text-white">Zero Tolerance for Discrimination:</strong> Create a welcoming environment free from discrimination, harassment, bullying, or exclusion, ensuring everyone feels valued and supported.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  2
                </span>
                Fun and Positive Engagement
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">Joyful Atmosphere:</strong> Promote a joyful, family-friendly atmosphere by participating with enthusiasm and encouraging others.
                </li>
                <li>
                  <strong className="text-white">Constructive Communication:</strong> Use positive, constructive communication to inspire teamwork, confidence, and growth during activities.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  3
                </span>
                Health and Safety
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">Prioritize Participant Safety:</strong> Prioritize the physical and emotional safety of all participants by following safety guidelines and using equipment responsibly.
                </li>
                <li>
                  <strong className="text-white">Immediate Reporting:</strong> Report any unsafe conditions, injuries, or concerns to a coach or staff member immediately.
                </li>
                <li>
                  <strong className="text-white">Compliance:</strong> Adhere to all applicable laws, regulations, and Family Phys. Ed. policies to ensure a safe and compliant environment.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  4
                </span>
                Integrity and Professionalism
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">Honesty & Transparency:</strong> Act with honesty and transparency in all interactions, whether with families, staff, or partners.
                </li>
                <li>
                  <strong className="text-white">Protect Confidentiality:</strong> Protect confidential information, such as participant details or business operations, and use resources appropriately.
                </li>
                <li>
                  <strong className="text-white">Role Models:</strong> Coaches and staff should model moral character traits, such as teamwork, resilience, and respect, to inspire participants.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  5
                </span>
                Family-Centered Collaboration
              </h2>
              <ul className="list-disc list-inside space-y-2.5 pl-2 marker:text-[#FDFC22]">
                <li>
                  <strong className="text-white">Fostering Family Bonds:</strong> Support the mission of Family Phys. Ed. by fostering family bonding and creating memorable, teachable moments through shared activities.
                </li>
                <li>
                  <strong className="text-white">Celebrate Effort:</strong> Encourage all family members to participate at their own pace, celebrating effort and togetherness over competition.
                </li>
              </ul>
            </section>

            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-2">
                <ShieldCheck className="w-7 h-7 text-[#FDFC22]" />
                Enforcement
              </h2>
              <p className="text-white/80">
                Violations of this Code of Conduct may result in warnings, removal from activities, or other disciplinary actions, depending on the severity.
              </p>
              
              <div className="bg-[#1C1C1E] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Have concerns or questions?</h4>
                  <p className="text-white/60 text-sm">Contact our community support team anytime.</p>
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

              <p className="text-white/70 italic text-sm mt-4">
                Together, we build a joyful, safe, and healthy community where families can thrive, embodying the Family Phys. Ed. mission of combining health and family through joyful physical activity.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
