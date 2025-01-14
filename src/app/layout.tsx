import type { Metadata } from "next";
import { Slabo_27px } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";


const slabo = Slabo_27px({
  weight: "400",
  variable: "--font-slabo",
  subsets: ["latin"],
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
      <body
        className={`${slabo.variable}  antialiased  bg-black `}
      >
        <main >
          <Nav />
          <div  >
            {children}
          </div>
      
        </main>
      </body>
    </html>
  );
}
