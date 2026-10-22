import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

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
      <body>
        <div className="bg-navy text-xs text-white">
          <div className="mx-auto flex max-w-6xl justify-between px-5 py-2">
            <span>Lifeguard Council of South Africa</span>
            <span>We Put Public Safety First</span>
          </div>
        </div>
        <Header />
        <main>{children}</main>
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
