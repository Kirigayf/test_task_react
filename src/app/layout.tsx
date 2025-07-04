import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Nexcent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased max-w-[2560px] mx-auto text-base md:text-[16px]`}>
        <Loading />
        <Header />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}