import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hives Pastries | Cakes, Smoothies, Ice Cream & More — Thika",
  description:
    "Delicious cakes, cupcakes, smoothies, yoghurt, ice cream and pastries. Freshly made daily at Hives Pastries in Thika. Order via WhatsApp for delivery.",
  keywords: [
    "Hives Pastries",
    "Thika bakery",
    "cakes Thika",
    "cupcakes",
    "smoothies",
    "ice cream",
    "pastries",
    "yoghurt",
    "birthday cake Thika",
    "graduation cake",
    "order cake online Thika",
  ],
  openGraph: {
    title: "Hives Pastries — Something Sweet is Waiting for You",
    description:
      "Cakes, cupcakes, smoothies, yoghurt, ice cream & more. Fresh daily from the heart of Thika.",
    type: "website",
    locale: "en_KE",
    siteName: "Hives Pastries",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-hive">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
