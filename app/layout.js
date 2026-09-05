import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import GlobalBackground from "./component/GlobalBackground";
import Navbar from "./component/Navbar";
import LazyWhatsAppChat from "./component/LazyWhatsAppChat";
import ScrollRefresh from "./component/ScrollRefresh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

import { siteConfig } from "@/content/config";

export const metadata = {
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.metadata.title}`,
  },
  description: siteConfig.metadata.description,
  metadataBase: new URL(siteConfig.metadata.baseUrl),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: siteConfig.metadata.baseUrl,
    siteName: siteConfig.metadata.title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} bg-black`}>
        <GlobalBackground />
        <Navbar />
        <ScrollRefresh />
        <div>{children}</div>
        <LazyWhatsAppChat />
      </body>
    </html>
  );
}
