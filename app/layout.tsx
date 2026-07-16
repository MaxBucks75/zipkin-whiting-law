import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileCallBar from "./components/MobileCallBar";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Zipkin Whiting Co., L.P.A.",
  description:
    "Zipkin Whiting Co., L.P.A. — Cleveland, Ohio trial attorneys handling wrongful death, auto & truck injury, and machine injury cases since 1964. Preview build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
