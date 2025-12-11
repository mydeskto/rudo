import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudo - Strategy-led B2B Web Design Agency",
  description: "We craft high-performing websites that turn B2B goals into measurable outcomes.",
  openGraph: {
    title: "Rudo - Strategy-led B2B Web Design Agency",
    description: "We craft high-performing websites that turn B2B goals into measurable outcomes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@replit",
    title: "Rudo - Strategy-led B2B Web Design Agency",
    description: "We craft high-performing websites that turn B2B goals into measurable outcomes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${poppins.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

