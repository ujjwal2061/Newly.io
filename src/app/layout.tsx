import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbara from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-black text-white antialiased`} >
        <Navbara />
        {children}
        <Footer />
      </body>
    </html>
  );
}
