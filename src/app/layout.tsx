import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Mastud | Product-Focused Software Developer",
  description: "Portfolio of Yash Mastud, a product-focused software developer with expertise in full-stack development, product management, and creating user-centric digital experiences.",
  keywords: "software developer, full-stack developer, product manager, web developer, React, Next.js, TypeScript, JavaScript, Mumbai, India",
  authors: [{ name: "Yash Mastud" }],
  creator: "Yash Mastud",
  publisher: "Yash Mastud",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yash Mastud | Product-Focused Software Developer",
    description: "Explore the portfolio of Yash Mastud, showcasing expertise in full-stack development, product management, and user-centric innovation.",
    url: "https://yashmastud.vercel.app",
    siteName: "Yash Mastud Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Mastud | Product-Focused Software Developer",
    description: "Portfolio showcasing expertise in full-stack development, product management, and user-centric innovation.",
  },
  alternates: {
    canonical: "https://yashmastud.vercel.app",
  },
  verification: {
    google: "DB6PN54JW7V7xICdliBBkuAU_C0UooVhNAC9mTfBpG8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yash Mastud",
              "url": "https://yashmastud.vercel.app",
              "jobTitle": "Product-Focused Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://www.linkedin.com/in/yash-mastud-3355a3189/",
                "https://github.com/ymastud7"
              ],
              "description": "Product-focused software developer with expertise in full-stack development, product management, and creating user-centric digital experiences.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressCountry": "India"
              },
              "jobTitle": "Software Developer",
              "alumniOf": "University of Mumbai",
              "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "Product Management", "Full-stack Development"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Yash Mastud Portfolio",
              "url": "https://yashmastud.vercel.app",
              "description": "Portfolio of Yash Mastud, a product-focused software developer with expertise in full-stack development, product management, and creating user-centric digital experiences."
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}