import { Geist, Geist_Mono, Bebas_Neue, League_Gothic } from "next/font/google";
import "./globals.css";
import GlobalBackground from "./component/GlobalBackground";
import Navbar from "./component/Navbar";
import WhatsAppChat from "./component/WhatsAppChat";
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

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

import { siteConfig } from "@/content/config";

export const metadata = {
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.metadata.title}`,
  },
  description: siteConfig.metadata.description,
  metadataBase: new URL(siteConfig.metadata.baseUrl),
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/assets/hero-portrait-mobile.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero-portrait.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${leagueGothic.variable} bg-black`}>
        <GlobalBackground />
        <Navbar />
        <ScrollRefresh />
        <div>{children}</div>
        <WhatsAppChat />
      </body>
    </html>
  );
}
