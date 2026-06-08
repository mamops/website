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
  "We engineer cloud infrastructure, build web platforms, and drive digital transformation. Consulting, development, and DevOps for companies that move fast.";

export const metadata: Metadata = {
  title: "Mamops | Engineering Digital Infrastructure",
  description,
  openGraph: {
    title: "Mamops | Engineering Digital Infrastructure",
    description,
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
    title: "Mamops | Engineering Digital Infrastructure",
    description,
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
      <body className="min-h-full flex flex-col bg-background text-foreground noise-overlay">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
