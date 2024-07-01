import type { Metadata } from "next";
import { Oswald } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


const oswald = Oswald({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "News verse",
  description: "Create by midgenration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
         {/* <Footer/> */}
      </body>
    </html>
  );
}
