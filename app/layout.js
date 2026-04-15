import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import GlobalBackground from "./component/GlobalBackground";
import Navbar from "./component/Navbar";
import WhatsAppChat from "./component/WhatsAppChat";
import ScrollRefresh from "./component/ScrollRefresh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} bg-black`}>
        <GlobalBackground />
        <Navbar />
        <ScrollRefresh />
        <div>{children}</div>
        <WhatsAppChat />
      </body>
    </html>
  );
}
