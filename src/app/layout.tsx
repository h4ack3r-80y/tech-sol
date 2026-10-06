import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LedgerProButton } from "@/components/layout/LedgerProButton";
import { ThemeProvider } from "@/context/ThemeContext";
import { ContentProvider } from "@/context/ContentContext";
import { siteConfig } from "@/config/siteConfig";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04070E",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.business.name} | Digital Solutions, Software & Technology`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description:
    "TechSol provides professional web, mobile, AI, automation, cybersecurity, cloud, POS/ERP, custom software, and SaaS solutions for businesses and organizations.",
  keywords: [
    "TechSol",
    "Software Development",
    "POS ERP Development",
    "Custom Software Islamabad",
    "Web Development Pakistan",
    "Cybersecurity Assessments",
    "Business Automation",
    "AI Application Development",
    "Cloud Solutions",
    "SaaS Architecture",
  ],
  authors: [
    { name: siteConfig.business.founder },
    { name: siteConfig.business.coFounder },
  ],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/official-logo.png",
    shortcut: "/images/official-logo.png",
    apple: "/images/official-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.business.name,
    title: `${siteConfig.business.name} | Digital Solutions, Software & Technology`,
    description:
      "Professional web, mobile, AI, automation, cybersecurity, cloud, POS/ERP, custom software, and SaaS solutions built around practical business needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    description: siteConfig.business.coreMission,
    founders: [
      {
        "@type": "Person",
        name: siteConfig.business.founder,
        jobTitle: siteConfig.business.founderTitle,
      },
      {
        "@type": "Person",
        name: siteConfig.business.coFounder,
        jobTitle: siteConfig.business.coFounderTitle,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.business.location.city,
      addressCountry: siteConfig.business.location.country,
    },
    telephone: siteConfig.business.contact.phoneRaw,
    slogan: siteConfig.business.tagline,
  };

  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${plusJakarta.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrganization),
          }}
        />
        {/* Anti-FOUC Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('sat_theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 dark:bg-[#04070E] text-slate-900 dark:text-white selection:bg-[#2E9BFF] selection:text-white transition-colors duration-200">
        <ContentProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
            <LedgerProButton />
          </ThemeProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
