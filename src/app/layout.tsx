
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Sealergy - Engineering Excellence, Energising Reliability",
  description: "Sealergy delivers cutting-edge engineering solutions and reliable energy systems. Explore our comprehensive range of industrial products, applications, and innovative solutions designed to power your business forward.",
  keywords: ["engineering", "energy solutions", "industrial products", "reliability", "Sealergy"],
  authors: [{ name: "Sealergy" }],
  openGraph: {
    title: "Sealergy - Engineering Excellence, Energising Reliability",
    description: "Sealergy delivers cutting-edge engineering solutions and reliable energy systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Norwester&family=Poppins:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased ">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
