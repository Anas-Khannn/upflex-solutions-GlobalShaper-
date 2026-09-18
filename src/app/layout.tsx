import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#203a2e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "UpflexSolutions | Circular Economy & Artisan Upcycling | Global Shapers Peshawar",
  description:
    "UpflexSolutions upcycles discarded billboard PVC banner waste into durable, artisanal consumer lifestyle goods while empowering marginalized female artisans with dignified green livelihoods in Peshawar, Pakistan. An initiative of Global Shapers Peshawar Hub.",
  keywords: [
    "UpflexSolutions",
    "Global Shapers Peshawar Hub",
    "PVC upcycling",
    "circular economy Pakistan",
    "sustainable fashion Peshawar",
    "female artisan empowerment",
    "recycled banner tote bags",
    "green jobs Pakistan",
    "zero waste initiative",
  ],
  authors: [{ name: "Global Shapers Peshawar Hub" }, { name: "Anas Khan" }],
  creator: "UpflexSolutions",
  publisher: "Global Shapers Peshawar Hub",
  openGraph: {
    title: "UpflexSolutions | Turning Banner Waste into Artisan Opportunities",
    description:
      "Transforming discarded PVC flex banners into durable, eco-friendly lifestyle goods while creating sustainable livelihoods for female artisans. An initiative of Global Shapers Peshawar Hub.",
    url: "https://upflexsolutions.org",
    siteName: "UpflexSolutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UpflexSolutions Handcrafted Upcycled Tote Bags & Female Artisans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UpflexSolutions | Upcycling PVC Banner Waste with Female Artisans",
    description:
      "A circular-economy social enterprise in Peshawar turning non-biodegradable advertising banners into high-utility lifestyle products.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#36322D] antialiased selection:bg-[#c45d3e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
