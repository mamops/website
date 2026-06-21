import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Mamops is a senior engineering team that ships full-stack web apps, integrates AI the right way, and runs on AWS, Azure, and Supabase. From first commit to production.";

const ogDescription =
  "Full-stack development, AI integration, UX/UI, and cloud infrastructure — built by senior engineers, for founders who need to move fast.";

export const metadata: Metadata = {
  title: "Mamops | We Build Your MVP. AI-Native. Production-Ready.",
  description,
  openGraph: {
    title: "Mamops | Engineering That Ships",
    description: ogDescription,
    siteName: "Mamops",
    type: "website",
    images: [
      {
        url: "/website/og-image.png",
        width: 1200,
        height: 630,
        alt: "mamops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mamops | Engineering That Ships",
    description: ogDescription,
    images: ["/website/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
