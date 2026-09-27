import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ThemeProvider } from "@/context/ThemeContext";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.business.name} | Digital Solutions, Software & Technology`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description:
    "Shayan Ahmad Digital Solutions provides professional web, mobile, AI, automation, cybersecurity, cloud, POS/ERP, custom software, and SaaS solutions for businesses and organizations.",
  keywords: [
    "Software Development",
    "POS ERP Development",
    "Custom Software Islamabad",
    "Web Development Pakistan",
    "Cybersecurity Assessments",
    "Business Automation",
    "Cloud Solutions",
    "SaaS Architecture",
    "Shayan Ahmad Digital Solutions",
  ],
  authors: [{ name: siteConfig.business.founder }],
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
    founder: {
      "@type": "Person",
      name: siteConfig.business.founder,
      jobTitle: siteConfig.business.founderTitle,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.business.location.city,
      addressCountry: siteConfig.business.location.country,
    },
    telephone: siteConfig.business.contact.phoneRaw,
    slogan: siteConfig.business.tagline,
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
