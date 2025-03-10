import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zinga App",
    template: "%s - Zinga App",
  },
  description: "Zinga App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <div className="w-full h-full flex flex-col">
          <main className="w-full flex flex-col row-start-2 items-center sm:items-start flex-[1_0_auto]">
            <Header />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
