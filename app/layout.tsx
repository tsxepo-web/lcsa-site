import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import InterimBanner from "@/components/InterimBanner";

export const metadata: Metadata = {
  title: {
    default: "Lifeguard Council of South Africa",
    template: "%s | Lifeguard Council of South Africa",
  },
  description:
    "The national professional register for lifeguards. Professional standards, ethics, scope of practice, accreditation and CPD.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
      />
      <body>
        <InterimBanner />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
