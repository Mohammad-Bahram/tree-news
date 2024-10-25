import Footer from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";

import type { Metadata } from "next";

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
    <html lang="en" dir="rtl">
      <body style={{ fontFamily: "IranYekan" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
