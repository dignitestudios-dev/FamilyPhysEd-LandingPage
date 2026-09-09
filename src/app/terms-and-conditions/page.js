import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Scale, FileCheck, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Family Phys. Ed.",
  description:
    "Terms and Conditions governing the use of Family Phys. Ed. platform, bookings, safety, and services.",
};

export default function TermsAndConditionsPage() {
  const termsSections = [
    {
      num: "1",
      title: "Introduction",
      content:
        "Welcome to Family Phys. Ed. (“the App”). The App is a marketplace that connects users (“Clients”) with certified physical education teachers and trainers (“Coaches”) to provide family training sessions and fun exercise experiences. By accessing or using the App, you agree to comply with these Terms and Conditions (“Terms”). If you do not agree, please do not use the App.",
    },
    {
      num: "2",
      title: "User Eligibility",
      content:
        "You must be at least 18 years old to create an account and book services through the App. By using the App, you represent and warrant that you meet this requirement.",
    },
    {
      num: "3",
      title: "Services Provided",
      content:
        "Family Phys. Ed. facilitates connections between Clients and Coaches for private training sessions, family fitness events, and birthday parties. Family Phys. Ed. provides a platform for independent professionals to offer their services. Clients are encouraged to review Coach profiles, background checks, and certifications before booking sessions.",
    },
    {
      num: "4",
      title: "Account Registration",
      content:
        "To use the App, you must create an account and provide accurate, current, and complete information as requested. You are responsible for maintaining the security of your account and password, and for any activity occurring under your account. You agree to notify us immediately of any unauthorized access or use of your account.",
    },
    {
      num: "5",
      title: "Booking and Payment",
      items: [
        {
          bold: "Booking:",
          text: "Clients may book sessions through the App by selecting available Coaches, times, and scheduling the session.",
        },
        {
          bold: "Payment:",
          text: "Payment for sessions is processed securely through the App via a third-party payment processor, Stripe. Family Phys. Ed. may collect a portion of the session, class, or party price as its service platform fee.",
        },
        {
          bold: "Cancellation:",
          text: "Cancellation policies are clearly displayed during the booking process. Clients agree to adhere to these cancellation policies and any applicable terms.",
        },
      ],
    },
    {
      num: "6",
      title: "Responsibilities of Users and Coaches",
      items: [
        {
          bold: "Clients:",
          text: "Clients agree to provide a safe, respectful, and appropriate environment for all training sessions.",
        },
        {
          bold: "Coaches:",
          text: "Coaches must have the necessary certifications and experience to provide services. They are responsible for maintaining participant safety and adherence to physical education best practices.",
        },
        {
          bold: "Liability:",
          text: "Users acknowledge that physical activities carry inherent risks, and assume full responsibility for their voluntary participation.",
        },
      ],
    },
    {
      num: "7",
      title: "Liability Disclaimer and Assumption of Risk",
      items: [
        {
          bold: "Assumption of Risk:",
          text: "You acknowledge and agree that physical activity, including strength, agility, and cardiovascular training, carries inherent risk of injury (including soreness, sprains, strains, or serious medical conditions). By using the services, you voluntarily assume all risks associated with physical activity.",
        },
        {
          bold: "Waiver and Release:",
          text: "You agree to release, waive, and discharge Family Phys. Ed., its officers, employees, agents, and contractors from any liability for injuries, illnesses, or property damage arising from participation in physical activities or use of the App.",
        },
        {
          bold: "Indemnification:",
          text: "You agree to indemnify and hold harmless Family Phys. Ed. and its affiliates against any claims, costs, damages, or expenses (including legal fees) arising from your use of the App or participation in services.",
        },
      ],
    },
    {
      num: "8",
      title: "Content and Conduct",
      items: [
        {
          bold: "User Content:",
          text: "Users agree not to post or upload any content to the App that is inappropriate, offensive, harmful, discriminatory, or violates any laws.",
        },
        {
          bold: "Monitoring and Enforcement:",
          text: "Family Phys. Ed. reserves the right to remove non-compliant content and suspend or terminate accounts for abusive behavior, fraud, or violations of these Terms.",
        },
      ],
    },
    {
      num: "9",
      title: "Privacy Policy",
      content:
        "By using the App, you agree to the collection and use of your personal data as outlined in our Privacy Policy. You understand that Family Phys. Ed. collects personal information as part of the booking and payment process and shares that information securely with third-party service providers (such as Stripe).",
    },
    {
      num: "10",
      title: "Consent to Physical Contact",
      content:
        "You consent to the possibility of minor physical contact by certified Coaches during training sessions strictly to ensure proper posture, technique, and injury prevention. You understand that this contact will be appropriate, professional, and limited to the scope of training.",
    },
    {
      num: "11",
      title: "Use of Picture(s) / Film / Likeness",
      content:
        "You agree to allow Family Phys. Ed. to take pictures, film, or likenesses during public community events for promotional and educational purposes. If you do not wish for your likeness to be used, you may inform Family Phys. Ed. in writing at any time.",
    },
    {
      num: "12",
      title: "Force Majeure",
      content:
        "Family Phys. Ed. shall not be held liable for any delay or failure in performance due to causes beyond its reasonable control, including but not limited to severe weather, natural disasters, acts of God, governmental restrictions, or public health emergencies.",
    },
    {
      num: "13",
      title: "Intellectual Property",
      content:
        "All content provided through the App, including logos, trademarks, artwork, software, UI design, text, and videos, is owned by Family Phys. Ed. or its licensors. Users may not reproduce, modify, or distribute any content without prior written consent from Family Phys. Ed.",
    },
    {
      num: "14",
      title: "Governing Law",
      content:
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Pennsylvania. By using the App, you agree that any disputes arising out of these Terms will be resolved in the courts of Pennsylvania, except where local laws provide non-waivable statutory rights.",
    },
    {
      num: "15",
      title: "Dispute Resolution & Arbitration",
      content:
        "Any dispute arising out of or relating to these Terms shall first be submitted to good-faith mediation. If unresolved within 30 days, it will be resolved through binding arbitration administered by the American Arbitration Association (AAA) under its commercial rules.",
    },
    {
      num: "16",
      title: "Termination of Accounts",
      content:
        "Family Phys. Ed. reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent transactions, or compromise user safety.",
    },
    {
      num: "17",
      title: "Changes to Terms",
      content:
        "Family Phys. Ed. may update or modify these Terms at any time. We will notify users of significant changes via email or in-app alerts. Continued use of the App after changes constitutes acceptance of the revised Terms.",
    },
    {
      num: "18",
      title: "Parental Consent and Responsibility",
      content:
        "Parents and legal guardians booking sessions on behalf of participating minors are responsible for providing accurate health, age, and activity details. Parents/guardians agree to actively supervise their children during all family sessions.",
    },
    {
      num: "19",
      title: "Assumption of Risk for Children",
      content:
        "Parents/guardians acknowledge that physical activity for children carries inherent risks of minor injuries (scrapes, sprains) or uncommon accidents. By allowing children to participate, parents/guardians voluntarily accept all risks on behalf of the child.",
    },
    {
      num: "20",
      title: "Coaches' Responsibilities When Working with Children",
      content:
        "Coaches providing services to minors must hold verified credentials, relevant youth fitness certifications, and passed background checks. Coaches maintain professional conduct and follow strict child safety protocols at all times.",
    },
    {
      num: "21",
      title: "Parental Supervision",
      content:
        "Parents/guardians are required to supervise their children during private sessions or family fitness events unless the session is held in an authorized drop-off youth clinic. Family Phys. Ed. does not assume daycare or custodial responsibilities outside the session scope.",
    },
    {
      num: "22",
      title: "Child Safety Guidelines",
      content:
        "All activities facilitated by Family Phys. Ed. are conducted with paramount focus on child safety. Parents/guardians agree to disclose any allergies, asthma, or medical conditions that could impact physical participation.",
    },
    {
      num: "23",
      title: "Use of Likeness for Children",
      content:
        "If photos or videos of children are taken during a session, Family Phys. Ed. requires written consent from the parent/guardian before using any imagery for promotional or social media purposes.",
    },
  ];

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
              <Scale className="w-3.5 h-3.5" />
              Legal Agreement & Terms
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Terms & Conditions for{" "}
              <span className="font-black text-yellow-gradient drop-shadow-[0_0_25px_rgba(253,252,34,0.35)]">
                Family Phys. Ed.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-white/70 font-medium">
              Please read these terms carefully before using our website, mobile application, and coaching services.
            </p>
          </div>

          {/* Main Content Glass Card */}
          <div className="bg-[#242426]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl text-white/85 text-base sm:text-lg leading-relaxed space-y-10">
            {termsSections.map((section) => (
              <section key={section.num} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black shrink-0">
                    {section.num}
                  </span>
                  <span>{section.title}</span>
                </h2>

                {section.content && <p className="text-white/80">{section.content}</p>}

                {section.items && (
                  <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#FDFC22]">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <strong className="text-white">{item.bold} </strong>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Section 24: Contact Information */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDFC22] flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#FDFC22]/20 border border-[#FDFC22]/40 text-[#FDFC22] text-base flex items-center justify-center font-black">
                  24
                </span>
                Contact Information
              </h2>
              <p>For questions regarding these Terms, please contact our legal and support teams:</p>

              <div className="bg-[#1C1C1E] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Family Phys. Ed. Legal Department</h4>
                  <p className="text-white/60 text-sm">Direct inquiries regarding terms, compliance, and policies.</p>
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
