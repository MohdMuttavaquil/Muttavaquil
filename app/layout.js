import { Geist, Geist_Mono, Montserrat  } from "next/font/google";
import "./globals.css";
import Nevber from "@/Components/Nevber";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muttavaquil | Full Stack Web Developer Portfolio",
  description:
    "Muttavaquil is a full stack web developer specializing in Next.js, React, Node.js, and modern web applications.",
};


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${montserrat.variable} antialiased`}
      >
        <Nevber />
        {children}
         <Footer />
      </body>
    </html>
  );
}
