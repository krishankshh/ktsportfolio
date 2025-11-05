import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Krishank Shah - Full-Stack Developer & Designer",
  description: "Full-stack developer and designer specializing in creating elegant solutions to complex problems. Experienced in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Krishank Shah", "Full-Stack Developer", "Web Developer", "UI/UX Designer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Krishank Shah" }],
  creator: "Krishank Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Krishank Shah - Full-Stack Developer & Designer",
    description: "Full-stack developer and designer specializing in creating elegant solutions to complex problems.",
    siteName: "Krishank Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishank Shah - Full-Stack Developer & Designer",
    description: "Full-stack developer and designer specializing in creating elegant solutions to complex problems.",
    creator: "@ShahKrisha20763",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
