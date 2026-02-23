import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NavigationProgressBar } from "@/components/layout/navigation-progress-bar";

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
  title: "Nexiqo - Full Stack Website Development & WordPress Design",
  description: "Full stack developers specializing in website creation and development. We build custom websites from frontend to backend, create WordPress solutions, and provide comprehensive SEO services.",
  keywords: ["full stack development", "website development", "WordPress design", "SEO services", "frontend development", "backend development", "custom websites"],
  openGraph: {
    title: "Nexiqo - Full Stack Website Development & WordPress Design",
    description: "Full stack developers specializing in website creation and development. We build custom websites from frontend to backend, create WordPress solutions, and provide comprehensive SEO services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexiqo - Full Stack Website Development & WordPress Design",
    description: "Full stack developers specializing in website creation and development. We build custom websites from frontend to backend, create WordPress solutions, and provide comprehensive SEO services.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/images/favicon.png", sizes: "32x32" },
      { rel: "icon", url: "/images/favicon-16x16.png", sizes: "16x16" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <Suspense fallback={null}>
            <NavigationProgressBar />
          </Suspense>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

