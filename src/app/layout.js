import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://familyphysed.com"),
  title: "Family Phys. Ed. | Move Together, Grow Stronger",
  description:
    "Empowering families to connect through fitness with guided group sessions, personalized coaching, and seamless tools for health and wellness across generations.",
  keywords: [
    "Family Fitness",
    "Physical Education",
    "Family Workouts",
    "Personal Coaching",
    "Health and Wellness",
    "Group Exercise",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Family Phys. Ed. | Move Together, Grow Stronger",
    description:
      "Empowering families to connect through fitness with guided group sessions, personalized coaching, and wellness tools.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} scroll-smooth antialiased bg-[#1C1C1E] text-white`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#1C1C1E] text-white font-sans selection:bg-[#FDFC22] selection:text-black overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
