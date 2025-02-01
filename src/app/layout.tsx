import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";



const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Paul Spaurgen",
  description: "Paul Spaurgen's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-black `}>
        <main className="w-full">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
