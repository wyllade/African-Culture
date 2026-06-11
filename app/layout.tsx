import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfroSphere — Explore the Living Cultures of Africa",
  description:
    "Discover Africa through its cultures, traditions, food, languages, history, art, music, and people across all 54 countries.",
  keywords: [
    "African culture",
    "Africa traditions",
    "African food",
    "African tribes",
    "African languages",
    "African festivals",
    "African art",
    "culture explorer",
  ],
  openGraph: {
    title: "AfroSphere — African Cultural Discovery",
    description:
      "Discover traditions, languages, cuisines, music, history, and stories from all 54 African countries.",
    type: "website",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
